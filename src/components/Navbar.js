import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';
import './Button.css';


function Navbar()
{
const[click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu =() => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960)
    {
        setButton(false);
    }
    else
    {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Filpe Filati Cucirini
                        <i className="fab ta-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/prodotti' className="nav-links" onClick={closeMobileMenu}>
                            Prodotti
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/qualità' className="nav-links" onClick={closeMobileMenu}>
                            Qualità
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/storia' className="nav-links" onClick={closeMobileMenu}>
                            La nostra Storia
                        </Link>
                    </li>
                    <li>
                        <Link to='/contatti' className='nav-links-mobile'onClick={closeMobileMenu}>
                            Contatti
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>CONTATTI</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar