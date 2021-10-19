import React from 'react';
import './doctor.css'
const Doctor = (props) => {
    const { Name, SpecialisedIn, img } = props.doctor;
    return (
        <div className="container col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="col">
                <div className="card card-height">
                    <img className="doctorImg " src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        <p className="card-text">{SpecialisedIn}</p>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Doctor;