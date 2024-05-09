import React from 'react';
import { Image} from '../../types';
import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';
interface ImageGalleryProps {
  results: Image[]; 
  openModal: (image: Image) => void;
}const ImageGallery: React.FC<ImageGalleryProps> = ({ results, openModal }) => {
  console.log('results: ', results);
  return (
    <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map(({ id, urls, alt_description }) => {
          return (
            <li
             key={id}
              className={css.galleryItem}
              >
              <ImageCard
                urls={urls}
                description={alt_description}
                onClick={() =>
                  openModal({id, urls, alt_description})
                }
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
