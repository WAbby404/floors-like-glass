import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import '../styles/Home.css';
import hero1 from '../assets/hero-about.webp';
import hero2 from '../assets/hero-products.webp';
import hero3 from '../assets/hero-services.webp';
import hero4 from '../assets/hero-gallery.webp';

const LazyPickBrand = React.lazy(() => import('../components/PickBrand'));
const LazyTestimonials = React.lazy(() => import('../components/Testimonials'));

const homeCardInfo = [{image: hero1, title: 'About Us', text: "Floors Like Glass has 49 years of experience in the flooring industry, and we represent the only flooring showroom in the New Hampton, NY area. We're a family-owned and operated business that specializes in the installation, sanding, and finishing of hardwood floors at affordable prices.", link: '/about' },
                    {image: hero2, title: 'Products', text: "With top-quality brands available at low prices, we represent an amazing opportunity for home and business owners to highlight the spaces where they live and work. From hardwood to laminate and vinyl, we have various collections in stock and can order the style of finish you are looking for.", link: '/products'},
                    {image: hero3, title: 'Services', text: "Not only do we offer quality flooring products, our installers are the best in the business. Handling any subfloor material, including radiant heat, concrete, or plywood. Whether it be new construction, repairs, or remodeling, Floors Like Glass will give you the best looking floors you've ever walked on.", link: '/services'},      
                    {image: hero4, title: 'Gallery', text: "We're proud of the work we've done over the past 50 years and are happy to share it with you! View our gallery and see some of our past projects. We also pride ourselves on our dependable service. Hear what our customers have to say about us!", link: '/gallery'}];

function Home(props) {
    return (
        <main>
            <div className="hero">
                    <h1 className="hero--title">We've got your floors covered</h1>
                    <Link to="/contact" className="btn hero--btn">Call for a consultation today!</Link>
            </div>
            <ul className="hero--card--container wrapper">
                {/* Hero cards for other pages of site */}
                {homeCardInfo.map((cardInfo) => {
                    return(
                        <li className="hero--card" key={`${Math.random()*1000}`}>
                            <div className="hero--card--img-container">
                                <img src={cardInfo.image} alt="null"/>
                            </div>
                            <h2 className="card--title">{cardInfo.title}</h2>
                            <p>{cardInfo.text}</p>
                            <Link to={cardInfo.link} className="btn hero--btn">{`Visit ${cardInfo.title}`}</Link>
                        </li>
                    )
                })}
            </ul>
            <LazyTestimonials/>
            <LazyPickBrand/>
            <CallToAction />
            <Footer />
        </main>

    );
}

export default Home;