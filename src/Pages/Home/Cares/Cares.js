import React from 'react';
import './cares.css';
import care1 from "../../../Images/Cares for patients/counselor.jpg"
import care2 from "../../../Images/Cares for patients/nutrition.png"
import care3 from "../../../Images/Cares for patients/patients.jpg"

const Cares = () => {
    return (
        <div className="container mt-5 m-5 ">
            <h2 className="text-primary mb-4">Care for patients &#10084;&#65039;</h2>

            <div class="row row-cols-1 row-cols-md-3 g-4 container">
                <div class="col">
                    <div class="card h-100">
                        <img src={care1} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-primary">Counseling and Support</h5>
                            <p class="card-text">From support groups to one-on-one sessions, our team is here for you.</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={care2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-primary">Nutrition</h5>
                            <p class="card-text">Get information about healthy eating, recipes, and tips.</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={care3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-primary">Integrative Medicine</h5>
                            <p class="card-text">View information on herbs, find meditations, and learn about our array of at-home classes and services. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cares;