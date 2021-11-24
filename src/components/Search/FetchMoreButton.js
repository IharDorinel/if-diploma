import React from 'react';

const FetchMoreButton = ({ setVisible }) => {
  
  const fetchMore = () => {
    setVisible(prev => prev + 8)
  }
  return (
    <button className="FetchMoreButton" onClick={fetchMore}>Show more</button>
  )
}

export default FetchMoreButton;