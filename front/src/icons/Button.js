import React from 'react';
import './button.css';

const IconButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="icon-btn">
      {children}
    </button>
  );
};

export default IconButton;
