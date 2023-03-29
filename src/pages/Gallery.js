import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/Gallery.css';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/3.jpg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/testimonial1.webp';
import img6 from '../assets/testimonial2.webp';
import img7 from '../assets/gallery/5.jpg';
import img8 from '../assets/gallery/6.jpg';
import img9 from '../assets/gallery/7.jpg';
import img10 from '../assets/gallery/8.jpg';
import img11 from '../assets/gallery/9.jpg';
import img12 from '../assets/gallery/10.jpg';
import img13 from '../assets/gallery/11.jpg';
import img14 from '../assets/gallery/12.jpg';
import img15 from '../assets/gallery/13.jpg';
import img16 from '../assets/gallery/14.jpg';
import img17 from '../assets/gallery/15.jpg';
import img18 from '../assets/gallery/16.jpg';

function Gallery(props) {
    const images = [{original: img1,thumbnail: img1,},
        {original: img2, thumbnail: img2,},
        {original: img3, thumbnail: img3,},
        {original: img4, thumbnail: img4},
        {original: img5, thumbnail: img5},
        {original: img6, thumbnail: img6},
        {original: img7, thumbnail: img7},
        {original: img8, thumbnail: img8},
        {original: img9, thumbnail: img9},
        {original: img10, thumbnail: img10},
        {original: img11, thumbnail: img11},
        {original: img12, thumbnail: img12},
        {original: img13, thumbnail: img13},
        {original: img14, thumbnail: img14},
        {original: img15, thumbnail: img15},
        {original: img16, thumbnail: img16},
        {original: img17, thumbnail: img17},
        {original: img18, thumbnail: img18},
      ];


    return (
        <section>
            <div className="wrapper">
                <div className="gallery--wrapper">
                  <h1 className="title gallery--title">Gallery</h1>
                  <div className="inner--wrapper gallery--wrapper" >
                    {/* React Image Gallery */}
                      <ImageGallery items={images} autoPlay={true} showIndex={true} />
                  </div>
                </div>
            </div>
            <CallToAction />
            <Footer />
        </section>
    );
}

export default Gallery;