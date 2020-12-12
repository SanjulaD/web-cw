import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './styles/slider-animation.css';
import './styles/styles.css'

const SliderComponent = () => {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchSeeds = async () => {
            const { data } = await axios.get('/api/slider')

            setSlider(data);
        }
        fetchSeeds();
    },[])

    return (
        <div>
            <Slider className="slider-wrapper">
                {slider.map((item, index) => (
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

export default SliderComponent
