import React from 'react';
import '../styles/Testimonials.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import testimonial1 from '../assets/testimonial1.webp';
import testimonial2 from '../assets/testimonial2.webp';
import testimonial3 from '../assets/testimonial3.webp';
import testimonial4 from '../assets/testimonial4.webp';
import testimonial5 from '../assets/testimonial5.webp';
import testimonial6 from '../assets/testimonial6.webp';
import awards from '../assets/awards.webp';
import awards2 from '../assets/award.webp';

// List of testimonials & awards from Dawn
// {img:testimonial-, text:'', byline:'', alt:''},
const testimonialsList = [{img:testimonial1, text:'"I always choose Floors Like Glass for all of my flooring projects. They are a family-owned business with decades of experience. Dawn is an expert on design and the vast assortment of flooring choices from hardwood to luxury vinyl. Her team is extremely skilled and courteous from measuring your space, to delivery, and finally on installation day."'
, byline:'-Terri E. | Florida, NY', order: 1, alt: 'Living room with beautiful hardwood floors'},
{img:testimonial2, text:'"I just had hardwood floors put in by Floors Like Glass. I always recommend them to my clients. They are absolutely amazing. I love love my new floors!! No other place even comes close. They are a great family to work with."'
, byline:'-Jennifer C. | Goshen, NY', order: 1, alt: 'Beautiful reflective hardwood floor'},
{img:testimonial3, text:'“Thanks so much! Our floors look great and have completely transformed our house.”', byline:'-Jen S. | Central Valley, NY', alt:'Charming Hardwood Floors with accent decorations'},
{img:testimonial4, text:'“Love the floor and really appreciated Barrys honesty & integrity, he certainly knows his stuff & did a great job! Thanks for all your help!”', byline:'-The Prymaks | Goshen, NY', alt:'Lovely Light and Dark Hardwood Flooring'},
{img:testimonial5, text:'"You have done my floors every time since I moved in and even though this is only the first coat, they already look amazing as always. You guys are truly the best. Thank you Dawn!"', byline:'-Mary | New Hampton, NY', alt:'Warm red hardwood flooring with edge detailing'},
{img:testimonial6, text:'“Thank you for another excellent job. We appreciate the good work!”', byline:'-D.B. | Highland Falls, NY', alt:'Light brown flooring'},
{text:'“Just wanted to tell you how absolutely thrilled we are with our refinished floors, they are gorgeous. You and your entire staff were a pleasure to work with. It was wonderful to be able to try the colors on the actual floor, and the cherry that we selected was beautiful.”', byline:'-L.L. | Sussex, NJ', order: 2},
{img:awards, text:'Won first place in the Times Herald-Record Readers’ Choice contest. Community voted and selected as the best Flooring Store from our local community for 7 years!', byline:'', order: 2, alt: 'Times Herald-Record Readers’ Choice contest awards for the years 2013, 2014, 2015, 2017, 2018, 2019 and 2020'},
{img:awards2, text:'Featured in Gordon Gilberts ‘Transparent Architecture’ where all flooring was done by Floors Like Glass.', byline:'', alt: 'Gordon Gilberts Transparent Architecture'},];

function Testimonials(props) {

    // For Slick Carousel 
    const settingsTestimonials = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 15000,
        cssEase: "linear",
        dots: true,
        arrows: true
      };

    return (
        <aside className="wrapper testimonials--wrapper">
            <h2 className="title testimonials--title">Testimonials & Awards</h2>
            <div className="container--testimonials">
                <Slider {...settingsTestimonials}>
                    {/* Each testimonial, make a new slick slide */}
                    {testimonialsList.map((testimonial) => {
                        return(
                            <div key={`${Math.random()*1000}`} className={`${testimonial.order === 2 ? 'testimonials--flex2' : 'testimonials--flex'}`} >
                                <img src={testimonial.img} alt={testimonial.alt} loading="lazy" className={testimonial.img ? '' : 'nodisplay'}/>
                                <div className="testimonials--text"> 
                                    <p>{testimonial.text}</p>
                                    <div className={testimonial.img ? 'byline' : 'byline bylinecenter'}>{testimonial.byline}</div>
                                </div>    
                            </div>
                    )})}
                </Slider>
            </div>
            <Link className="btn" to="/gallery">View Gallery</Link>
        </aside>
    );
}

export default Testimonials;