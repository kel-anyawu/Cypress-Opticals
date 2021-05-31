import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <section id="about" className="about mt-5">
                <div className="container-fluid">

                    <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>What We Do.</h3>
                        <p>We offer a full range of eye assessments, investigations and treatments.</p>

                        <div className="icon-box">
                        <div className="icon"><i class="bx bx-fingerprint"></i></div>
                        <h4 className="title">Optometry Clinic</h4>
                        <p className="description">We help in diagnosing and managing all types of refractive errors in both Geriatric and paediatric patients.</p>
                        </div>

                        <div className="icon-box">
                        <div className="icon"><i class="bx bx-gift"></i></div>
                        <h4 className="title">Community Health Screenings</h4>
                        <p className="description">We regularly visit local communities to carry out free visual screenings, and offer free eye treatments to those who need it.</p>
                        </div>

                        <div className="icon-box">
                        <div className="icon"><i class="bx bx-atom"></i></div>
                        <h4 className="title">Frames and Lenses Selection</h4>
                        <p className="description">We assist you in selecting frames that are appropriate for any face shape or size.</p>
                        </div>

                    </div>
                    </div>

                </div>
            </section>  
        </div>
    )
}

export default AboutUs;
