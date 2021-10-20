import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="banner d-flex  align-items-center ">
                <div className="row container">
                    <div className="col-md-10 col-lg-10 col-12">
                        <h1 className="title">Cure It Cancer Center</h1>
                        <h2 className="title-two">We are here to treat patients with care and love  &#10084;&#65039;  </h2>

                    </div>
                    <div className="col-md-2 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;