import React, { useEffect, useState } from 'react';
import CancerType from './CancerType';

const CancerTypes = () => {
    const [types, setTypes] = useState([])
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, [])
    return (
        <div className="container ">
            <h2 className="text-danger">Cancer Types</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 cancerTypes">
                {
                    types.map(type => <CancerType
                        key={type.id}
                        type={type}
                    >

                    </CancerType>)
                }
            </div>

        </div>
    );
};

export default CancerTypes;