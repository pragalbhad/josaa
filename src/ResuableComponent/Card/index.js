import React from 'react';
import './Card.scss';

const Card = ({ title, value, color }) => (
  <div className="percentile-card">
    <div className="d-flex align-items-center gap-4 percentile-container"><span className='percentile-value'>{value}</span><span className='percentile-text'>(Percentile)</span></div>
    <div className="card-title" style={{ backgroundColor: color }}>{title}</div>
  </div>
);

export default Card;
