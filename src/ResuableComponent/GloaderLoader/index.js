import React from 'react';
import './GlobalLoader.scss';

const GlobalLoader = () => {
  return (
      <div className="global-loader-overlay">
        <div className="global-loader-spinner"></div>
      </div>
  );
};

export default GlobalLoader;