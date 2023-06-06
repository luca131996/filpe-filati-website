import React from 'react';
import './ProductDescription.css';

const ProductDescription = ( {product} ) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.img} alt="product" />
      </div>
      <div className="text-container">
        <p>{product.text}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
