import React from 'react';
import { Link } from "react-router-dom"; 

const WhyUs = () => {
    return (
        <div>
            <section id="why-us" className="why-us mt-5">
      <div className="container mt-5">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Cypress Opticals?</h3>
              <p>
              We pride ourselves on delivering comprehensive eye care at standards obtainable at the best clinics and hospitals world-wide. We are a team of ophthalmologists, optometrists, opticians dedicated and courteous front office and administrative staff.
              </p>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Patients</h4>
                    <p>We have treated over 100,000 patients since our incepption in 1997.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Expertise</h4>
                    <p>All our Doctors are expertly trained, and are all registered with the appropriate regulating bodies</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Equipments</h4>
                    <p>We are fully equipped with state-of-the-art equipments and machines for appropriate diagnosis and treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default WhyUs;
