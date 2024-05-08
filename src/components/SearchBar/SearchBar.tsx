import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';
interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}
const SearchBar = ({ onSubmit }:SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button className={css.submitBtn} type="submit" aria-label="Search">
          🔍
        </button>

        <input
          className={css.field}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <Toaster position="top-left" aria-label="Search" />
    </header>
  );
};

export default SearchBar;
