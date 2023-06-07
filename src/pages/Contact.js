import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillPhone, AiFillClockCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import '../styles/Contact.css';

function Contact(props) {
    return (
        <section>
            <div className="wrapper">
                <h1 className="title">Contact Us</h1>
                <div className="inner--wrapper">
                    <div className="contact--info--map">
                        <ul className="contact--info">
                            {/* Footer Info */}
                            <h2 className="contact--subtitle">Floors Like Glass</h2>
                            <li className="contact--icon--text">
                                <HiLocationMarker size="20px" color="#432D20"/>
                                <p>135 Gate Schoolhouse Rd, New Hampton, NY 10958</p>
                            </li>
                            <li className="contact--icon--text">
                                <AiFillPhone size="20px" color="#432D20"/>
                                <a className="contact--link underline" href="tel:845-294-9466">(845) 294-9466</a>
                            </li>
                            <li className="contact--icon--text">
                                <MdEmail size="20px" color="#432D20"/>
                                <p>floorslikeglass@gmail.com</p>
                            </li>
                            <li className="contact--icon--text--hours">
                                <div className="contact--icon--text">
                                    <AiFillClockCircle size="20px" color="#432D20"/>
                                    <h3 className="contact--subtitle">Hours</h3>
                                </div>
                                <div className="contact--hours--info">
                                    <div>
                                        <p className="hour--titles">Monday - Friday</p>
                                        <p>9am - 3pm</p>
                                    </div>
                                    <div>
                                        <p className="hour--titles">Saturday</p>
                                        <p>By Appointment Only</p>
                                    </div>
                                    <div>
                                        <p className="hour--titles">Sunday</p>
                                        <p>Closed</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <iframe title="Google Maps Floors Like Glass" className="contact--map" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=135%20Gate%20Schoolhouse%20Rd,%20New%20Hampton,%20NY%2010958+(Floors%20Like%20Glass)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a>
                            </iframe>
                        </div>
                    </div>
                </div>
                {/* Footer Social Medias */}
                <h2 className="title">Follow Us On Social Media</h2>
                <div className="inner--wrapper">
                    <div className="contact--socials">
                        <Link to="https://www.facebook.com/floorslikeglass/" title="Visit our Facebook" target="_blank" rel="noopener noreferrer" className="contact--social btn">
                            <BsFacebook size="35px"/>
                            <p>/floorslikeglass</p>
                        </Link>
                        <Link to="https://www.instagram.com/floorslikeglass/" title="Visit our Instagram" target="_blank" rel="noopener noreferrer" className="contact--social btn">
                            <BsInstagram size="35px"/>
                            <p>/floorslikeglass</p>
                        </Link>
                        <Link to="https://www.linkedin.com/in/floors-like-glass-dawn-3356618a/" title="Visit our Linkedin" target="_blank" rel="noopener noreferrer" className="contact--social btn">
                            <BsLinkedin size="35px"/>
                            <p>/floors-like-glass-dawn-3356618a</p>
                        </Link>
                    </div>
                </div>
                <div className="hr"></div>
            </div>
            <Footer />
        </section>
    );
}

export default Contact;