import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsMenu.css';

const ProductsMenu = ({ products }) => {
  return (
    <div className="products-menu-card">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/prodotti/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsMenu;
