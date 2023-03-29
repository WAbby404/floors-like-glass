import React from 'react';
import { Link } from "react-router-dom";
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import AboutVideo from '../assets/AboutVideo.mp4';
import '../styles/About.css';
import aboutImg from '../assets/hero2.webp';

function About(props) {
    return (
        <section>
            <div className="wrapper">
                <h1 className="title">About Us</h1>
                <div className="inner--wrapper">
                    <div className="about--text--flex">
                        <div className="about--text--flex-inner">
                            <h2 className="subtitle">49 Years of Quality Flooring</h2>
                            <p>Floors Like Glass has been serving the New Hampton, NY area for the last 49 years. We are a one-stop shop where you can trust the material, you can trust the installer, and trust your job is going to be done with utmost care. In other words, we take the tough choices out of your construction or renovation! Just give us a call and we can find the best-looking, hardest-wearing floor for your needs.</p>
                            <Link to="/contact" className="btn">Contact Us</Link>
                        </div>
                        <img src={aboutImg} alt="Floors Like Glass"/>
                    </div>
                    <div className="about--video--flex">
                        <video controls="controls" className="about--video">
                            <source src={AboutVideo} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <h2 className="title">Our History</h2>
                <div className="inner--wrapper inner--wrapper--margin">
                    <p>
                        Our parents, Harry and Anne Dickel started this business in Monroe back in the mid 70’s. They worked together installing, sanding and finishing floors. We moved to Goshen in the 80’s where my mom had the idea to start selling wood and we opened our showroom. We were really only one of 3 at that time in the area. The others are no longer in business.
                        <br/>
                        Floors Like Glass has stood the test of time by working out of our home and not having overhead. That was my mom’s dedication to this business as we passed the saving to our clients. They worked side by side. Mom worked day and night building the business, doing everything from estimates, selling jobs and actually doing the work with my dad. We had so much growth back then we could not even keep up with the work. We had multiple sets of installers and sanders. Our main installer was Barry Sr. My brothers and I grew up in this business.
                        <br/>
                        We all ran the business together as a family until my mom got sick in 2003 and passed away in 2008. The business is being handed down thru the generations and Dawn, Mike & Barry Jr. uphold the same high standards and great craftsmanship as mom and dad.
                        <br/>
                        We chose small amount of teams to keep the quality of our work. This means our crews are top notch. We are still the best around and really the original floor company is still here. We took everything my parents taught us and kept going from there. I know my mom would be so happy and proud looking down on us now.
                    </p>
                </div>
            </div>
            <CallToAction />
            <Footer />
        </section>
    );
}

export default About;