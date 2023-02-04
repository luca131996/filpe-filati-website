import React from 'react';
import ProductsMenu from './ProductsMenu';

const products = [
  { id: 1, name: 'Spun' },
  { id: 2, name: 'Start' },
  { id: 3, name: 'Core' },
  { id: 4, name: 'Plus' },
  { id: 5, name: 'Soft' },
  { id: 6, name: 'Extra' },
  { id: 7, name: 'Tex' },
  { id: 8, name: 'Sam' },
  { id: 9, name: 'Loom' },
  { id: 10, name: 'Fast' },
  { id: 11, name: 'Org' },
];

function Products()
{
  return (
    <div className="container">
      <ProductsMenu products={products} />
    </div>
  );
};

export default Products;