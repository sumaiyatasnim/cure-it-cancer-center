import React from 'react';
import './doctor.css'
const Doctor = (props) => {
    const { Name, SpecialisedIn, img } = props.doctor;
    return (
        <div className="container">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-doctor">
                    <img src={img} className="card-img-top img-fluid doctorImg" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-primary"> {Name} </h5>
                        <p className="card-text text-success fs-4">
                            Specialized in : {SpecialisedIn}
                        </p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Doctor;