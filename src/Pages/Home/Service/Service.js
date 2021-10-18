import React from 'react';
import "./service.css"
const Service = (props) => {
    const { name, img } = props.homeService;
    return (
        <div className="container col-lg-4">
            <div>
                <img className="img-fluid homeServiceImg" src={img} alt="" />
            </div>
            <div>
                <h2>Name:{name}</h2>
            </div>

        </div>
    );
};

export default Service;