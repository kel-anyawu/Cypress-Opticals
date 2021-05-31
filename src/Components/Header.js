import React from 'react';
import weblogo from "../images/cypresslogo.png";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {
    return (
        <div>
            <TopBar/>
           <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <img src={weblogo} alt="logo"/>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li className="nav-link scrollto active"><Link to= "/" style={{textDecoration: "none"}}>Home</Link></li>
                            <li className="nav-link scrollto"><Link to="/AboutUs" style={{textDecoration: "none"}}>About</Link></li>
                            <li className="nav-link scrollto"><Link to="/Services" style={{textDecoration: "none"}}>Services</Link></li>
                            <li className="nav-link scrollto"><Link to="/Gallery" style={{textDecoration: "none"}}>Gallery</Link></li>
                            <li className="nav-link scrollto"><Link to="/WhyUs" style={{textDecoration: "none"}}>Our Achievements</Link></li>
                            
                        </ul>
                        <li className="nav-link scrollto"><Link to="Contact">Contact Us</Link></li>
                        
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <li className="appointment-btn scrollto"><Link to="/Appointment">Make an <span>Appointment</span></Link></li>
                </div>
            </header> 
        </div>
    )
}

export default Header
