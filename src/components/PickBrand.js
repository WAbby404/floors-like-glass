import React from 'react';
import { Link } from "react-router-dom";
import '../styles/PickBrand.css';
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
import Slider from "react-slick";
import pickbrandHardwood from '../assets/pickbrand-hardwood.webp';
import pickbrandLaminate from '../assets/pickbrand-laminate.webp';
import pickbrandVinyl from '../assets/pickbrand-vinyl.webp';
import pickbrandRefinishing from '../assets/pickbrand-refinishing.webp';


const links = [{title: 'Hardwood', link: '/products/hardwood', img: pickbrandHardwood}, {title: 'Laminate', link: '/products/laminate', img: pickbrandLaminate}, {title: 'Vinyl', link: '/products/vinyl', img: pickbrandVinyl}, {title: 'Refinishing', link: '/services', img: pickbrandRefinishing}];

const brands = [{img: armstrong, link:'link to site', alt:'Armstrong Flooring'}, {img: bruce, link:'https://www.bruce.com/en-us/products.html?size=24', alt: 'Bruce Hardwood Floors site'}, {img: mullican, link:'https://www.mullicanflooring.com/Products', alt: 'Mullican Hardwood Flooring site site'}, {img: johnson, link:'https://johnsonhardwood.com/products/', alt:'Johnson Hardwood site'}, {img: appalachian, link:'https://appalachianflooring.com/product-category/flooring/', alt:'Appalachian Flooring site'}, {img: boen, link:'https://boen.com/products/product-overview/?size=n_20_n', alt: 'Boen Flooring site'}, {img: hartco, link:'https://www.hartco.com/en-us/products.html?size=24&filters=construction%3ASolid%20Hardwood&filters=construction%3AEngineered%20Hardwood', alt: 'Hartco Hardwood Flooring site'}, {img: somerset, link:'https://www.somersetfloors.com/flooring', alt:'Somerset Hardwood Flooring site'}, {img: beau, link:'https://www.beauflor.us/en/laminate', alt:'Beau Flor site'}, {img: villabella, link:'https://villabellafloors.com/hardwood-flooring/landing.aspx', alt: 'Villa Bella Hardwood Floors site'}, {img: allusion, link:'https://www.allusionflooring.com/', alt: 'Allusion Vinyl Flooring site'}, {img: fusion, link:'https://www.fusionfloorcovering.com/luxury-vinyl-plank', alt:'Fusion Vinyl Flooring site'}, {img: axis, link:'https://www.axiscor.com/', alt:'Axis Pro Vinyl Flooring site'}, {img: chesapeake, link:'https://www.chesapeakeflooring.com/material-type/vinyl', alt: 'Chesapeake Flooring site'}, {img: mirage, link:'https://www.miragefloors.com/en-us/hardwood-flooring/', alt: 'Mirage Hardwood Flooring site'}, {img: indusparquet, link:'https://www.indusparquet-usa.com/product-category/hardwood-flooring/', alt:'Indusparquet Flooring site'}];

function PickBrand(props) {

    const settingsPickBrand = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false
      };

    return (
        <aside className="pickbrand--wrapper">
            <div className="wrapper">
                <div className="hr"></div>
                <h2 className="title">We'll help you pick what's right for you...</h2>
                <div className="pickbrand--flex square--flex">
                    {/* Square links to services & products */}
                    {links.map((linkInfo) => {
                        return(
                                <Link key={`${Math.random()*1000}`} className="square--link pickbrand--link" to={`${linkInfo.link}`} style={{backgroundImage: `url(${linkInfo.img})`}} alt="null">
                                    {linkInfo.title}
                                </Link>
                        )
                    })}
                </div>
                <h3 className="title">... with the brands we carry</h3>
                <div className="pickbrand--slick">
                    <div className="container">
                        {/* Slick Brand Carousel */}
                        <Slider {...settingsPickBrand}>
                            {brands.map((brand) => {
                                return(
                                    <Link key={`${Math.random()*1000}`} to={`${brand.link}`} target="_blank" rel="noopener noreferrer" title={`Visit ${brand.alt} Site`} tabIndex="0">
                                        <img src={brand.img} alt={brand.alt} loading="lazy"/>
                                    </Link>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <Link to="/products" className="btn btn--pickbrand">View brands</Link>
            </div>
        </aside>
    );
}

export default PickBrand;