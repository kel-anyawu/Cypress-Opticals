import React from 'react';
import logo from "../images/cypresslogo.png";

const Footer = () => {
    return (
        <div>
           <footer id="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3><img src={logo} alt="logo"/></h3>
                                <p>Brick City Estate <br/>
                                Kubwa<br/>
                                Abuja Nigeria. <br/><br/>
                                <strong>Phone:</strong> +234 803 328 3515<br/>
                                <strong>Email:</strong> info@cypressopticals.com<br/>
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> Home</li>
                                        <li><i className="bx bx-chevron-right"></i> About us</li>
                                        <li><i className="bx bx-chevron-right"></i> Services</li>
                                        <li><i className="bx bx-chevron-right"></i> Terms of service</li>
                                        <li><i className="bx bx-chevron-right"></i> Privacy policy</li>
                                    </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> General Optometry Clinic</li>
                                <li><i className="bx bx-chevron-right"></i> Frames and Lenses</li>
                                <li><i className="bx bx-chevron-right"></i> Ophthalmology</li>
                                <li><i className="bx bx-chevron-right"></i> Ocular Prosthesis</li>
                                <li><i className="bx bx-chevron-right"></i> Community Screenings</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Please Subscribe to our Newsletter to get Optometry Updates and the latest News.</p>
                                <form action="" method="post">
                                    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                            <div className="container d-md-flex py-4">

                                <div className="me-md-auto text-center text-md-start">
                                    <div className="copyright">
                                    &copy; Copyright <strong><span>Cypress Opticals</span></strong>. All Rights Reserved
                                    </div>
                                </div>
                                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                    <i className="bx bxl-twitter"></i>
                                    <i className="bx bxl-facebook"></i>
                                    <i className="bx bxl-instagram"></i>
                                    <i className="bx bxl-skype"></i>
                                    <i className="bx bxl-linkedin"></i>
                                </div>
                            </div>
            </footer> 
        </div>
    )
}

export default Footer;
