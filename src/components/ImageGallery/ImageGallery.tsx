import { Image, Results } from '../../types';
import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';
interface ImageGalleryProps {
  results: Results[];
  openModal: (image: Image) => void;
}
const ImageGallery = ({ results, openModal }:ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map(({ id, urls, description }) => {
          return (
            <li key={id} className={css.galleryItem}>
              <ImageCard
                urls={urls}
                description={description}
                onClick={() =>
                  openModal({ urls, alt_description: description })
                }
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
