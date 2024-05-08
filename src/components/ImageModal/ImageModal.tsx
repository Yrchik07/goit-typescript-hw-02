import Modal from 'react-modal';
import css from './ImageModal.module.css';
interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: string;
}
const ImageModal = ({ isOpen, onRequestClose, selectedImage }: ImageModalProps) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
    >
      <img src={selectedImage} alt="Selected" />
    </Modal>
  );
};

export default ImageModal;
