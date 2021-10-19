import React from 'react';
import { Link } from 'react-router-dom';
import "./cancerType.css"

const CancerType = (props) => {
    const { name, overview, img, id } = props.type
    return (
        <div className="container col-lg-4 col-md-6 col-sm-12 col-12 ">
            <div className="col">
                <div className="card card-height mb-3">
                    <img className="homeServiceImg img-fluid" src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{overview}</p>

                    </div>
                    <div className="justify-content-center pb-4">
                        <button className="btn-primary "><Link to={`/details/${id}`}><button className="btn-primary">See Details</button></Link></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CancerType;