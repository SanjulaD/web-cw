import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './styles/slider-animation.css';
import './styles/styles.css'
import content from './../../data/slider';

const HomeScreen = () => {
    return (
        <div> 
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeScreen;
