import React from 'react';
import CardMenu from '../../components/CardMenuSet/CardMenu';
import OurServices from '../../components/OurServices/OurServices';
import SliderComponent from '../../components/Slider/Slider';

const HomeScreen = () => {
    return (
        <> 
            <SliderComponent />
            <CardMenu />
            <OurServices />
        </>
    )
}

export default HomeScreen;
