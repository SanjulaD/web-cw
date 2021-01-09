import React from 'react';

import CardMenu from '../../components/CardMenuSet/CardMenu';
import Graphs from '../../components/Graphs/Graphs';
import OurServices from '../../components/OurServices/OurServices';
import SliderComponent from '../../components/Slider/Slider';
import GenralMap from '../Map/GenralMap';

const HomeScreen = () => {

    return (
        <>
            <SliderComponent />
            <CardMenu />
            <OurServices />
            <GenralMap />
        </>
    )
}

export default HomeScreen;
