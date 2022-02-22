import React from 'react'
import ChiliLogo from './images/spicychililogo.jpg'
import './Navbar.css'

function Navbar() {
    return (
        <div className='Mainnavbar'>
            <h2>
                <img src={ChiliLogo} height={100} width={100}/> 
                <h2 className='Title'>
                    Prick Tox
                </h2>
            </h2>
            <nav classname='BundleLinks'>
                <li className='Projects'>
                    Projects
                </li>
                <li className='Skills'>
                    Skills
                </li>
                <li className='ContactUs'>
                    Contact Us
                </li>
            </nav>
        </div>
    );
}

export default Navbar;

{ /* use this as guide https://react-bootstrap.github.io/components/navbar/ */ }