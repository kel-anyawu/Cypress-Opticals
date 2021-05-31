import React from 'react';

const Gallery = () => {
    return (
        <div>
           <section id="gallery" class="gallery mt-5">
      <div className="container">

        <div className="section-title mt-5">
          <h2>Gallery</h2>
          
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid"/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid"/>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
                <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid"/>
            </div>
          </div>

        </div>

      </div>
    </section> 
        </div>
    )
}

export default Gallery;
