import React from 'react';
import '../styles/ProductTypes.css';
import { Link } from "react-router-dom";
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import bruce from '../assets/brands/bruce.webp';
import beau from '../assets/brands/beau.webp';
import laminate from '../assets/laminate-hero.webp';

function Laminate(props) {
    const brands=[{img: beau, link:'https://www.beauflor.us/en/laminate', alt:'Beau Flor'}, {img: bruce, link:'https://www.bruce.com/en-us/products.html?size=24', alt: 'Bruce Hardwood Floors'}];

    return (
        <section>
        <div className="products--type--img" style={{
            backgroundImage: `linear-gradient(to bottom, #ffffff00, #ffffff00, #ffffff00, #ffffff), url(${laminate})`,
            backgroundPosition: 'bottom'}}>
            <div className="wrapper">
                <h1 className="products--type--title">Laminate</h1>
                <div className="products--type--p inner--wrapper">
                    <p>Try to tell the difference between a genuine hardwood and our laminate floors, and we guarantee you’ll be fooled. New technology lets laminate exactly match the look of a hardwood floor, including the hand-scraped look. Unlike hardwood floors, however, you can’t scratch the surface of our high-quality laminates; making them perfect for homes with pets, children, or lots of foot traffic. Ask about our lifetime warranties!</p>
                </div>
            </div>
        </div>
        <div className="wrapper products--type--brands--wrapper">
            <h2 className="title products--type--subtitle">Laminate Brands We Carry</h2>
            <div className="products--type--brands">
                {/* Laminate Brand Links */}
                {brands.map((brand) =>{
                    return(
                        <Link to={brand.link} className="products--type--brand" target="_blank" rel="noopener noreferrer" >
                            <img src={brand.img} alt={brand.alt} className="products--type--img"/>
                        </Link>
                    )
                })}
                
            </div>
            <Link className="btn products--type--btn" to="/products">View all brands</Link>
        </div>
        <div className="hr"></div>
        <Testimonials/>
        <CallToAction />
        <Footer/>
    </section>
    );
}

export default Laminate;