import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Oops, something went wrong, please reload the page! 😢' }) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
