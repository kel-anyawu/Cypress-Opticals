import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="services" className="services mt-5">
                <div className="container mt-5">

                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>At Cypress Opticals, we carry out a plethora of services, ranging from the General Optometry to Surgical procedures, and even Ocular Prosthesis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4>Ophthalmology</h4>
                                    <p>Diligent and expertly-trained Ophthalmologists are present 24/7 round the clock perfoming eye surgeries and restoring sight.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div class="icon-box">
                                    <div class="icon"><i class="fas fa-pills"></i></div>
                                        <h4>Ocular Prosthesis</h4>
                                        <p>At the Eye Doctors, we understand a patients psychological need when they have an eye evisceration following a pathology. Hence we specialize in the sale and fitting of prosthetic eyes on patients. We ensure that the prosthetic matches the patients facial features with-out being very obvious.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-hospital-user"></i></div>
                                            <h4>Community Services</h4>
                                            <p>Weekly, doctors at Cypress Opticals visit the local communities especially in the rural areas to carry out eye examinations, and dispense glasses and drugss when necessary for free.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                        <div className="icon-box">
                                            <div className="icon"><i className="fas fa-dna"></i></div>
                                                <h4>Frames and Lenses</h4>
                                                <p>Our Staff at the Optical Section are trained to assist patients in selecting frames that are appropriate for any face shape or size.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                            <div className="icon-box">
                                                <div className="icon"><i class="fas fa-wheelchair"></i></div>
                                                    <h4>Specialized Treatment</h4>
                                                    <p>At Cypress Opticals we have a soft spot for people living with disabilities, and ensure we provide them with specialized treatment, to suit their needs.</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                                <div className="icon-box">
                                                    <div className="icon"><i class="fas fa-notes-medical"></i></div>
                                                        <h4>Medicines</h4>
                                                        <p>Every drug dispensed at Cypress Opticals are well researched and approved by the appropiate Regulating Proerties in Nigeria, and overseas.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
            </section>
        </div>
    )
}

export default Services;
