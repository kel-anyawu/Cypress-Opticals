import React from 'react';
import { Link } from "react-router-dom";

const FirstImage = () => {
    return (
        <div>
           <section id="hero" className="d-flex align-items-center">
                <div class="container" mt-5>
                <h1>Welcome to Cypress Opticals</h1>
                <h2>We are team of dedicated and diligent Optometrists <br/> trained to cater to all your eye care needs.</h2>
                <h5 className="btn-get-started scrollto"><Link to="/AboutUs" >Get Started</Link></h5>
                </div>
            </section> 
        </div>
    )
}

export default FirstImage;
