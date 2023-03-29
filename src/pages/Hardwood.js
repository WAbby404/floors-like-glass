import React from 'react';
import '../styles/ProductTypes.css';
import { Link } from "react-router-dom";
import hardwood from '../assets/hardwood-hero.webp';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import armstrong from '../assets/brands/armstrong.webp';
import bruce from '../assets/brands/bruce.webp';
import appalachian from '../assets/brands/appalachian.webp';
import boen from '../assets/brands/boen.webp';

function Hardwood(props) {
    const brands=[{img: armstrong, link:'link to site', alt:'Armstrong Flooring'}, {img: appalachian, link:'https://appalachianflooring.com/product-category/flooring/', alt:'Appalachian Flooring'}, {img: bruce, link:'https://www.bruce.com/en-us/products.html?size=24', alt: 'Bruce Hardwood Floors'}, {img: boen, link:'https://boen.com/products/product-overview/?size=n_20_n', alt: 'Boen Flooring'}];

    return (
        <section>
            <div className="products--type--img" style={{
                backgroundImage: `linear-gradient(to bottom, #ffffff00, #ffffff00, #ffffff00, #ffffff), url(${hardwood})`}}>
                <div className="wrapper">
                    <h1 className="products--type--title">Hardwood</h1>
                    <div className="products--type--p inner--wrapper">
                        <p>For traditionalists, nothing matches the warm and inviting look of a hardwood floor. At Floors Like Glass, we offer 3/4″ solid nail-down floors that are either pre-finished or installed, sanded, and then finished on-site. These products go down great over a traditional subfloor, but we also offer engineered floors that go down over concrete or radiant heat. These products can be glued, floated, or stapled down. They incorporate real wood on top while accommodating areas that won’t accept a traditional nailed-down floor.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper products--type--brands--wrapper">
                <h2 className="title">Hardwood Brands We Carry</h2>
                <div className="products--type--brands">
                    {/* Hardwood Brand Links */}
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

export default Hardwood;