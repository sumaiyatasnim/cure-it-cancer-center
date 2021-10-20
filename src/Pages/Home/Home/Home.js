import React from 'react';
import Banner from '../Banner/Banner';
import Cares from '../Cares/Cares';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Cares></Cares>
        </div>
    );
};

export default Home;