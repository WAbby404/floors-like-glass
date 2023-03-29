import React from 'react';
import '../styles/Services.css';
import PickBrand from '../components/PickBrand';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import services1 from '../assets/hero2.webp';
import services2 from '../assets/services2.webp';
import services3 from '../assets/services3.webp';
import services4 from '../assets/services4.webp';

// const LazyPickBrand = React.lazy(() => import('../components/PickBrand'));

function Services(props) {
    return (
        <section>
            <div className="wrapper">
                <h1 className="title">Services</h1>
                <div className="inner--wrapper">
                    <div className="services--flex">
                        <div>
                            <h2 className="subtitle">From Flooring to Finishing</h2>
                            <h3 className="smaller--header">Hardwood & Laminate Flooring</h3>
                            <p>At Floors Like Glass, we offer a wide selection of hardwood and laminate flooring materials to suit your style and budget. We can install your new floor, or deliver the materials to your home if you’re planning on a DIY project. Visit our beautiful showroom where you can view samples from leading manufacturers and choose a floor for your home today.</p>
                        </div>
                        <img src={services1} alt="Floors Like Glass Showroom"/>
                    </div>

                    <div className="services--flex">
                        <div>
                            <h3 className="smaller--header">Installations</h3>
                            <p>After choosing a floor, our first step will be scheduling a site inspection and an installation date. We pride ourselves on using an in-house installation team that has been part of our family business for decades. When you choose Floors Like Glass to handle an installation, we’ll warranty the entire package of products, from the material down to the subfloor.</p>
                        </div>
                        <img src={services2} alt="Installing Floorboards"/>
                    </div>

                    <div className="services--flex">
                        <div>
                            <h3 className="smaller--header">Sanding & Finishing</h3>
                            <p>You may not remember it, but somewhere under all of those scratches, there was once a beautiful hardwood floor. We’ll bring your floor back to its original glory with sanding, and stain it a color of your choice. If you can’t find the color you want, we’ll even custom-make a color for you! Lastly, we use the most durable finishes on the market today and offer both water, oil base and tongue oil finishes.</p>
                        </div>
                        <img src={services3} alt="Floor Sander at work"/>
                    </div>

                    <div className="services--flex">
                        <div>
                            <h3 className="smaller--header">Cleaning Products</h3>
                            <p>We carry a wide variety of professional-grade cleaning products to keep your new or refinished floors looking sparkling clean! Our staff can help you select the perfect product for your type of floor.</p>
                        </div>
                        <img src={services4} alt="Floor Cleaning Supplies"/>
                    </div>
                </div>
            </div>
            <PickBrand />
            <CallToAction />
            <Footer />
        </section>
    );
}

export default Services;