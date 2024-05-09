import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../../types';
interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: Image | null;
}


const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
    >
      {selectedImage && 
      <img
       src={selectedImage.urls.regular} 
       alt={selectedImage.alt_description} 
       />}
    </Modal>
  );
};

export default ImageModal;

