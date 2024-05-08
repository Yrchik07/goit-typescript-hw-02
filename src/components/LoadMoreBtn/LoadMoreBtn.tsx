import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn = ({ onClick }:LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} type="button" className={css.loadBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
