import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className=" container-fluid">
            <footer className=" py-3 footer">
                <div>
                    <Link className="text-white text-decoration-none" to="/contact"><h6>Contact Us</h6></Link>
                </div>
                <div>
                    <Link className="text-white text-decoration-none" to="/register"><h6>Register to Cure It Cancer Center</h6></Link>
                </div>

                <br />

                <small className="text-white"> &#169; 2021  Cure It Cancer Center</small>
            </footer>
        </div>
    );
};

export default Footer;