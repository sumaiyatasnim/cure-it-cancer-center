import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const HomeService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const homeServices = services.slice(0, 6);
    return (
        <div className="container ">
            <h2 className="text-danger mt-5">Most common cancers you can get treated here</h2>
            <p>To see all types of cancers you can get treated here visit <Link to="/cancerTypes"><span>All types of cancers</span></Link> </p>
            <div className="homeServices row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    homeServices.map(homeService => <Service
                        key={homeService.id}
                        homeService={homeService}
                    >
                    </Service>
                    )
                }
            </div>
        </div>
    );
};

export default HomeService;