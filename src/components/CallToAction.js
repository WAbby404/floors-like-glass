import React from 'react';
import '../styles/CallToAction.css';
import { Link } from "react-router-dom";

function CallToAction(props) {
    return (
        <aside className="action--background">
            <div className="wrapper action--flex">
                <h2 className="title action--title">Come visit our showroom and talk to one of our knowledgeable professionals today!</h2>
                <Link to="/contact" className="btn">Call to make an appointment</Link>
                <h3 className="action--number">(845) 294-9466</h3>
            </div>
        </aside>
    );
}

export default CallToAction;