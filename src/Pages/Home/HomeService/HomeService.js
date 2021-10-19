import React, { useEffect, useState } from 'react';
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
        <div className="container">
            <h2 className="text-danger">Some Types of cancers</h2>
            <div className="homeServices row">
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