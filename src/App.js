import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Qualità from './components/pages/Qualità';
import Storia from './components/pages/Storia';
import DoveSiamo from './components/pages/DoveSiamo';
import Spun from './components/products/spun';
import Start from './components/products/start';
import Core from './components/products/core';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/qualità' element={<Qualità/>}/>
          <Route path='/storia' element={<Storia/>}/>
          <Route path='/dovesiamo' element={<DoveSiamo/>}/>
          <Route path='/prodotti/1' element={<Spun/>}/>
          <Route path='/prodotti/2' element={<Start/>}/>
          <Route path='/prodotti/3' element={<Core/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;