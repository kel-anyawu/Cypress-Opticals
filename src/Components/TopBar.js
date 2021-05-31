import React from 'react';
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div>
            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <Link to="mailto:info@cypressopticals.com">info@cypressopticals.com</Link>
                        <i className="bi bi-phone"></i> +2348033283515
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <Link to="#" className="twitter"><i class="bi bi-twitter"></i></Link>
                        <Link to="#" className="facebook"><i class="bi bi-facebook"></i></Link>
                        <Link to="#" className="instagram"><i class="bi bi-instagram"></i></Link>
                        <Link to="#" className="linkedin"><i class="bi bi-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
