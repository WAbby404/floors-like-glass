import React from 'react';
import { Link } from "react-router-dom";
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import '../styles/Products.css';
import hardwood from '../assets/pickbrand-hardwood.webp';
import laminate from '../assets/pickbrand-laminate.webp';
import vinyl from '../assets/pickbrand-vinyl.webp';

import armstrong from '../assets/brands/armstrong.webp';
import bruce from '../assets/brands/bruce.webp';
import mullican from '../assets/brands/mullican.webp';
import johnson from '../assets/brands/johnson.webp';
import appalachian from '../assets/brands/appalachian.webp';
import boen from '../assets/brands/boen.webp';
import hartco from '../assets/brands/hartco.webp';
import somerset from '../assets/brands/somerset.webp';
import beau from '../assets/brands/beau.webp';
import villabella from '../assets/brands/villabella.webp';
import allusion from '../assets/brands/allusion.webp';
import fusion from '../assets/brands/fusion.webp';
import axis from '../assets/brands/axis.webp';
import chesapeake from '../assets/brands/chesapeake.webp';
import mirage from '../assets/brands/mirage.webp';
import indusparquet from '../assets/brands/indusparquet.webp';

// const LazyTestimonials = React.lazy(() => import('../components/Testimonials'));

function Products(props) {
    const brands = [{img: armstrong, link:'link to site', alt:'Armstrong Flooring'}, {img: bruce, link:'https://www.bruce.com/en-us/products.html?size=24', alt: 'Bruce Hardwood Floors'}, {img: mullican, link:'https://www.mullicanflooring.com/Products', alt: 'Mullican Hardwood Flooring'}, {img: johnson, link:'https://johnsonhardwood.com/products/', alt:'Johnson Hardwood'}, {img: appalachian, link:'https://appalachianflooring.com/product-category/flooring/', alt:'Appalachian Flooring'}, {img: boen, link:'https://boen.com/products/product-overview/?size=n_20_n', alt: 'Boen Flooring'}, {img: hartco, link:'https://www.hartco.com/en-us/products.html?size=24&filters=construction%3ASolid%20Hardwood&filters=construction%3AEngineered%20Hardwood', alt: 'Hartco Hardwood Flooring'}, {img: somerset, link:'https://www.somersetfloors.com/flooring', alt:'Somerset Hardwood Flooring'}, {img: beau, link:'https://www.beauflor.us/en/laminate', alt:'Beau Flor'}, {img: villabella, link:'https://villabellafloors.com/hardwood-flooring/landing.aspx', alt: 'Villa Bella Hardwood Floors'}, {img: allusion, link:'https://www.allusionflooring.com/', alt: 'Allusion Vinyl Flooring'}, {img: fusion, link:'https://www.fusionfloorcovering.com/luxury-vinyl-plank', alt:'Fusion Vinyl Flooring'}, {img: axis, link:'https://www.axiscor.com/', alt:'Axis Pro Vinyl Flooring'}, {img: chesapeake, link:'https://www.chesapeakeflooring.com/material-type/vinyl', alt: 'Chesapeake Flooring'}, {img: mirage, link:'https://www.miragefloors.com/en-us/hardwood-flooring/', alt: 'Mirage Hardwood Flooring'}, {img: indusparquet, link:'https://www.indusparquet-usa.com/product-category/hardwood-flooring/', alt:'Indusparquet Flooring'}];

    return (
        <section>
            <div className="wrapper">
                <h1 className="title">Products</h1>
                <div className="inner--wrapper">
                    <h2 className="subtitle">The Best Flooring Products at the Best Prices</h2>
                    <p>Floors Like Glass has been serving the New Hampton, NY area for the last 49 years. We are a one-stop shop where you can trust the material, you can trust the installer, and trust your job is going to be done with utmost care. In other words, we take the tough choices out of your construction or renovation! Just give us a call and we can find the best-looking, hardest-wearing floor for your needs.</p>
                    <div className="square--flex products--flex">
                        <Link to="/products/hardwood" className="square--link product--links" style={{backgroundImage: `url(${hardwood})`}}>Hardwood</Link>
                        <Link to="/products/laminate" className="square--link product--links" style={{backgroundImage: `url(${laminate})`}}>Laminate</Link>
                        <Link to="/products/vinyl" className="square--link product--links" style={{backgroundImage: `url(${vinyl})`}}>Vinyl</Link>
                    </div>
                </div>
                <h2 className="title">Brands We Carry</h2>
                <div className="inner--wrapper">
                    <div className="products--brands">
                        {/* Product Brand Links*/}
                        {brands.map((brand) => {
                            return(
                                <Link key={`${Math.random()*1000}`} to={brand.link} className="products--brand" title={`Visit ${brand.alt} Site`} target="_blank" rel="noopener noreferrer" >
                                    <img src={brand.img} alt={brand.alt}/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="hr"></div>
            </div>
            <Testimonials />
            {/* <LazyTestimonials/> */}
            <CallToAction />
            <Footer />
        </section>
    );
}

export default Products;