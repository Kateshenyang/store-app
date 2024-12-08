import React from 'react';

const ShopCard = ({ product }) => {
  return (
    <div className="card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-color">{product.color}</p>
      <img src={product.img} alt={product.name} />
      <div className="card-footer">
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;