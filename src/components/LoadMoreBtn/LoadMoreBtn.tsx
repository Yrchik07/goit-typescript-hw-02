import React from 'react';
import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.loadBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
