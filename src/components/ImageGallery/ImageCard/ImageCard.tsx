import css from './ImageCard.module.css';
interface ImageCardProps {
  urls: {
    small: string;
  };
  description?: string;
  onClick: () => void;
}
const ImageCard = ({ urls, description, onClick }:ImageCardProps) => {
  return (
    <div onClick={onClick}>
      <img className={css.galleryImage} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
