import React from 'react';
import './TravelSection.css'
const TravelSection = () => {
    return (
        <div className="travel-section">
            <div className="left-section">
                <img className='bg-img' src="./img/Rectangle 7.png" alt="" />
                <img className='top-img' src="./img/My project 1.png" alt="" />

            </div>
            <div className="right-section">
                <h5>Travel Point</h5>
                <h3 className='right_section-title'>We helping you find your dream location</h3>
                <p className='para-box'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="numbers-container">
                    <div className="number-box">
                        <h3>500+</h3>
                        <p>Holiday Package</p>
                    </div>
                    <div className="number-box">
                        <h3>100</h3>
                        <p>Luxury Hotel</p>
                    </div>
                    <div className="number-box">
                        <h3>7</h3>
                        <p>Premium Airlines</p>
                    </div>
                    <div className="number-box">
                        <h3>2k+</h3>
                        <p>Happy Customer</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default TravelSection;
