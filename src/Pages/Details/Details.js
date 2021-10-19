import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const seeDetails = details.find(detail => detail?.id == serviceId);
        setSingleDetail(seeDetails);
        console.log(seeDetails);
    }, [details]);

    // const { name, overview, treatment, screening } = singleDetail;
    return (
        <div className="container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={singleDetail?.img} className="img-fluid rounded-start" alt="..."></img>
                        <p>{singleDetail?.imgInfo}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-3 ps-5">
                            <h3 className="card-title text-center text-danger">{singleDetail?.name}</h3>
                            <p className="card-text text-start"><span className="fs-5 fw-bold text-primary">Overview :</span> {singleDetail?.overview}</p>
                            <p className="card-text text-start"><span className="fs-5 fw-bold text-primary">Screening :</span> {singleDetail?.screening}</p>
                            <p className="card-text text-start"><span className="fs-5 fw-bold text-primary">Treatment :</span> {singleDetail?.treatment}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;