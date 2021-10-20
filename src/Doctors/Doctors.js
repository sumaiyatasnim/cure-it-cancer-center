import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;