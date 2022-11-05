import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Prodotti from './components/pages/Prodotti';
import Qualità from './components/pages/Qualità';
import Storia from './components/pages/Storia';
import Contatti from './components/pages/Contatti';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prodotti' element={<Prodotti/>}/>
          <Route path='/qualità' element={<Qualità/>}/>
          <Route path='/storia' element={<Storia/>}/>
          <Route path='/contatti' element={<Contatti/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;