import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <ShopCard key={index} product={card} />
      ))}
    </div>
  );
};

export default CardsView;