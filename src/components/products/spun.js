import React from 'react';
import '../../App.css';
import Footer  from '../Footer';
import Products from '../Products';
import ProductDescription from '../ProductDescription';
import image from "../../images/spun.jpg"

const description = 'L’articolo SPUN viene prodotto utilizzando fibre di poliestere ad alta tenacità, filate con il sistema cotoniero. Il filato cosi ottenuto, viene poi ritorto a due o più capi utilizzando torcitoi a doppia torsione, in modo tale da escludere la presenza di qualsiasi nodo.Il risultato finale consiste in un filato molto più resistente dei classici filati di cotone, e quindi adatto ai più svariati utilizzi. Nello stesso tempo la lubrificazione elettronica assicura un finissaggio tale da garantire un grado di cucibilità pari al quello dei filati cucirini 100% cotone. Un’ulteriore garanzia, a suggello del largo utilizzo di questo articolo, è data dall’elevato grado di solidità alla luce, ai lavaggi ed all’abrasione, tipica delle fibre di poliestere. L’articolo SPUN è disponibile nelle etichette 25, 30, 50, 75, 120, 150 e 180 (vedasi dati tecnici) per il settore dell’abbigliamento, dell’arredocasa e della confezione in genere, nonché in molte altre titolazioni che trovano larga diffusione el settore della tessitura e della stampa. Lo SPUN è disponibile in una vasta gamma di colori ed in formati che vanno dai 5.000 ai 20.000yds, a seconda delle esigenze del cliente.'
const spun = [
  { img: image, text: description },
];

export default function Spun() {
  return (
  <>
  <div style={{display: 'flex', justifyContent:' center'}}>
    <div className='list-container'>
      <Products/>
    </div>
      <div className="description_container">
        <ProductDescription product={spun[0]}/>
      </div>
  </div>
  <Footer/>
  </>
  );
}