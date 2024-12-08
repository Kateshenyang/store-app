import React from 'react';

const ShopItem = ({ product }) => {
  return (
    <div className="list-item">
      <img src={product.img} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-color">{product.color}</p>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart">ADD TO CART</button>
    </div>
  );
};

export default ShopItem;