import React from 'react';
import { Link } from 'react-router-dom';

import "./service.css"
const Service = (props) => {
    const { name, img, id, overview } = props.homeService;
    return (
        <div className="container ">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-style">
                    <img src={img} className="card-img-top img-fluid homeServiceImg" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title text-danger"> {name} </h4>
                        <p className="card-text ">
                            Specialized in : {overview}
                        </p>

                    </div>
                    <div className="justify-content-center pb-4">
                        <Link to={`/details/${id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;

