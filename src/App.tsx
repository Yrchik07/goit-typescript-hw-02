import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { requestPhotosByQuery } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Image} from './types';

const App: React.FC = () => {
  const [results, setResults] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [resultsHasMore, setResultsHasMore] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query.length) return;

    const fetchPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query, page);
        if (data.results.length === 0) {
          setResultsHasMore(false);
        } else {
          if (page === 1) {
            setResults(data.results);
          } else {
            setResults(prevResults => [...prevResults, ...data.results]);
          }
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotosByQuery();
  }, [query, page]);

  const onSubmit = (searchTerm: string) => {
    setQuery(searchTerm);
    setPage(1);
    setResultsHasMore(true);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {isError && <ErrorMessage />}
      {results && <ImageGallery results={results} openModal={openModal} />}
      {isLoading && <Loader />}
      {results && resultsHasMore && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;
