import React from 'react';
import '../DoveSiamo.css';
import Footer from '../Footer'
import { Mailer } from '../Mailer';

export default function DoveSiamo() {
  
  return (
  <>
  <div style={{display: 'flex', flexDirection:'row'}}>
    <div className='map-container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.373221240997!2d9.876045215914015!3d45.8037833187401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783e1924a1a3159%3A0x251462512d9f10f3!2sFilpe%20filati%20cucirini!5e0!3m2!1sit!2sit!4v1670586966882!5m2!1sit!2sit" width="1000" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='form-container'>
      
      <Mailer/>
    </div>
  </div>
  <Footer/>
  </>

  );
}