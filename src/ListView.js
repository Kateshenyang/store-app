import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <ShopItem key={index} product={item} />
      ))}
    </div>
  );
};

export default ListView;