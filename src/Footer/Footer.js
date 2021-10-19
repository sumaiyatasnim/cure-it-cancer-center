import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="container-fluid bg-dark py-3 fixed-bottom">
                <Link className="text-white text-decoration-none" to="/contact">Contact Us</Link>
                <br />
                <small className="text-white"> &#169; 2021 Sumaiya Tasnim</small>
            </footer>
        </div>
    );
};

export default Footer;