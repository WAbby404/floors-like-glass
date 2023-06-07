import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import { HiLocationMarker } from 'react-icons/hi';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';
import logo from '../assets/logo.webp';

function Navigation() {
    // for hamburger/responsive nav menu
    const [ clicked, setClicked ] = useState(false);

    const handlePress = (e) => {
        if(e.key === 'Enter'){
            setClicked(!clicked);
        }
    };

    return (
        <nav className="nav">
            <div className="wrapper">
                <div className="nav--location--wrapper">
                    <div className="nav--location">
                        <div className="nav--flex--location">
                            <HiLocationMarker/>
                            <p>Visit us - New Hampton, NY</p>
                        </div>
                        <a className="nav--flex--location underline" href="tel:845-294-9466">(845) 294 - 9466</a>
                    </div>
                </div>
                <div className="nav--flex--main">
                    <Link to="/" onClick={() => setClicked(false)}>
                        <img src={logo} alt="Floors Like Glass Logo" className="nav--logo"/>
                    </Link>
                    {clicked ? <IoIosClose size="50px" onKeyDown={(e) => handlePress(e)} onClick={() => setClicked(!clicked)} className="menu--icons" tabIndex="0"/> : <GiHamburgerMenu size="30px" className="menu--icons" onKeyDown={(e) => handlePress(e)} onClick={() => setClicked(!clicked)} tabIndex="0"/>}
                    <div className={ clicked ? "nav--flex--main--links active--menu" : "nav--flex--main--links"}>
                        <Link to="/" onClick={() => setClicked(false)}>Home</Link>
                        <Link to="/about" onClick={() => setClicked(false)}>About</Link>
                        <Link to="/contact" onClick={() => setClicked(false)}>Contact</Link>
                        {/* Drop down menu on Products */}
                        <div className="dropdown">
                            <div className="dropdown--products">
                                <Link to="/products" className="products" onClick={() => setClicked(false)}>Products</Link>
                                <VscTriangleDown className="icon--up"/> 
                                <VscTriangleUp className="icon--down"/>
                            </div>
                            <div className="dropdown--menu">
                                <Link to="/products/hardwood" onClick={() => setClicked(false)}>Hardwood</Link>
                                <Link to="/products/laminate" onClick={() => setClicked(false)}>Laminate</Link>
                                <Link to="/products/vinyl" onClick={() => setClicked(false)}>Vinyl</Link>
                            </div>
                        </div>
                        <Link to="/services" onClick={() => setClicked(false)}>Services</Link>
                        <Link to="/gallery" onClick={() => setClicked(false)}>Gallery</Link> 
                        <Link to="https://www.roomvo.com/my/multisurface_demo" title="Roomvo Room Visualizer" className="btn" target="_blank" rel="noopener noreferrer">Room Visualizer</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;