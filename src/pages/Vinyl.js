import React from 'react';
import '../styles/ProductTypes.css';
import { Link } from "react-router-dom";
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import vinyl from '../assets/vinyl-hero.webp';

import allusion from '../assets/brands/allusion.webp';
import axis from '../assets/brands/axis.webp';
import bruce from '../assets/brands/bruce.webp';
import chesapeake from '../assets/brands/chesapeake.webp';

function Vinyl(props) {    
    const brands=[{img: allusion, link:'https://www.allusionflooring.com/', alt: 'Allusion Vinyl Flooring'}, {img: axis, link:'https://www.axiscor.com/', alt:'Axis Pro Vinyl Flooring'}, {img: bruce, link:'https://www.bruce.com/en-us/products.html?size=24', alt: 'Bruce Hardwood Floors'}, {img: chesapeake, link:'https://www.chesapeakeflooring.com/material-type/vinyl', alt: 'Chesapeake Flooring'}];

    return (
        <section>
        <div className="products--type--img" style={{
            backgroundImage: `linear-gradient(to bottom, #ffffff00, #ffffff00, #ffffff00, #ffffff), url(${vinyl})`}}>
            <div className="wrapper">
                <h1 className="products--type--title">Vinyl</h1>
                <div className="products--type--p inner--wrapper">
                    <p>Our vinyl wood and tile products are flying off the shelves. Our high-quality vinyl floors look amazing while offering extreme waterproofing or water resistance. Come in from any weather—rain, snow, or mud—and walk on these floors without any worries at all. Due to this ability to resist damage from water and shrug off stains, vinyl floors make an amazing kitchen product.</p>
                </div>
            </div>
        </div>
        <div className="wrapper products--type--brands--wrapper">
            <h2 className="title products--type--subtitle">Vinyl Brands We Carry</h2>
            <div className="products--type--brands">
                {/* Vinyl Brand Links */}
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

export default Vinyl;