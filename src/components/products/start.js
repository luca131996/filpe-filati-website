import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Products from '../Products';
import ProductDescription from '../ProductDescription';
import start_img from "../../images/spun.jpg";

const description = "L'articolo START, similmente allo SPUN .....";
const start = [
  { img: start_img, text: description },
];

export default function Start() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='list-container'>
          <Products />
        </div>
        <div className="description_container">
          <ProductDescription product={start[0]} />
        </div>
      </div>
      <Footer />
    </>
  );
}
