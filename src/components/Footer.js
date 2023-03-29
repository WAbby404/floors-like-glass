import React from 'react';
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
import logo from '../assets/logo.webp';
import '../styles/Footer.css';

function Footer() {

    return(
        <footer>
            <div className="wrapper footer--wrapper">
                <div className="footer--spacing">
                    {/* Footer Nav */}
                    <div className="footer--nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/"><img src={logo} alt="Floors Like Glass Logo"/></Link>
                        <Link to="/products">Products</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="footer--nav--small">
                        <Link to="/"><img src={logo} alt="Floors Like Glass Logo" className="footer-nav-img"/></Link>
                    </div>
                    <div className="footer--flex">
                        {/* Floors Like Glass Info */}
                        <div className="footer--hours">
                            <h3 className="footer--hours--title">Hours</h3>
                            <h4 className="footer--hours--bold">Monday - Friday</h4>
                            <h5>9am - 3pm</h5>
                            <h4 className="footer--hours--bold">Saturday</h4>
                            <h5>By Appointment Only</h5>
                            <h4 className="footer--hours--bold">Sunday</h4>
                            <h5>Closed</h5>
                        </div>
                        <div className="footer--info">
                            <h2 className="title">Floors Like Glass</h2>
                            <h3>135 Gate Schoolhouse Rd, New Hampton, NY 10958</h3>
                            <h3>(845) 294-9466</h3>
                            <h3>floorslikeglass@gmail.com</h3>
                        </div>
                        <div className="footer--socials--main">
                            <h4 className="footer--socials--title">Follow us on social media</h4>
                            <div className="footer--socials">
                                <Link className="footer--social" to="https://www.facebook.com/floorslikeglass/" title="Floors Like Glass Facebook Page" target="_blank" rel="noopener noreferrer"><BsFacebook size="35px"/></Link>
                                <Link className="footer--social" to="https://www.instagram.com/floorslikeglass/" title="Floors Like Glass Instagram Page" target="_blank" rel="noopener noreferrer"><BsInstagram size="35px"/></Link>
                                <Link className="footer--social" to="https://www.linkedin.com/in/floors-like-glass-dawn-3356618a/" title="Floors Like Glass Linkedin Page" target="_blank" rel="noopener noreferrer"><BsLinkedin  size="35px"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright">
                    <p>©Copyright | Floors Like Glass | All Rights Reserved | Designed & built by <Link to="https://wabby404.github.io/portfolio-redo/" title="Abby Waddells Portfolio Site" className="copyright--link" target="_blank" rel="noopener noreferrer">Abby Waddell</Link></p>
                </div>
        </footer>
    );
}

export default Footer;