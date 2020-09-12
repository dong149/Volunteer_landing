import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const Carousels = () => {

    return (
        <Carousel style={{ marginTop: '200px' }}>
            <div className="carousel-main">
                <img src="/carousel/carousel1.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div className="carousel-main">
                <img src="/carousel/carousel1.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div className="carousel-main">
                <img src="/carousel/carousel1.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

    );
}


export default Carousels;