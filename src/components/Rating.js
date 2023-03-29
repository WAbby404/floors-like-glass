import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaYelp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Rating.css';

function Rating(props) {
    return (
        <aside className="rating--container">
            <Link title="Leave A Review On Google" className="rating--green" to="https://www.google.com/search?q=floors+like+glass&rlz=1C1RLNS_enUS828US828&oq=floors+like+glass&aqs=chrome.0.35i39j46i175i199i512j0i22i30l2j0i390j69i60l3.2940j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89c32e7aadeb47e7:0x2af35eb297ef5f9d,3,,,," target="_blank" rel="noopener noreferrer">
                <BsGoogle className="rating--icon" size="32px" alt="Google Logo"/>
            </Link>
            <Link title="Leave A Review On Yelp" className="rating--green" to="https://www.yelp.com/writeareview/biz/zX6WQSXafdz6SQov3IN2Eg?return_url=%2Fbiz%2FzX6WQSXafdz6SQov3IN2Eg&review_origin=biz-details-war-button" target="_blank" rel="noopener noreferrer">
                <FaYelp className="rating--icon" size="35px" alt="Yelp Logo"/>
            </Link>
        </aside>
    );
}

export default Rating;