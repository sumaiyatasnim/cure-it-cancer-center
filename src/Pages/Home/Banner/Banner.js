import React from 'react';
import './banner.css'
import banner1 from '../../../Images/Carousel banner/banner1.jpg'
import banner2 from '../../../Images/Carousel banner/banner2.jpg'
import banner3 from '../../../Images/Carousel banner/banner3.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner2} className="d-block w-100 bannerImg" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text-primary">Cure It Cancer Hospital</h1>
                        <p className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem ducimus sequi facilis esse eos quas, consequuntur, incidunt fugiat, dicta aspernatur ratione minus consequatur numquam maiores! Asperiores nulla a cupiditate.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100 bannerImg" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100 bannerImg" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;