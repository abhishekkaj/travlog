
import React from 'react';
import Cards from './Card.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const CardSection = () => {
    return (
        <div className="container">
            <div className="services-text">
                <h5>Services</h5>
                <h3>Our top value categories for you</h3>
            </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
        
          className="swiper_container"
        >
            
          <SwiperSlide>
          <div className="card">
            <img className='card-icons' src="./img/destination 1.png" alt="" />
            <h5>Best Tour Guide</h5>
            <p>What looked like a small patch of purple grass, above five feet.</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img className='card-icons' src="./img/destination 1.png" alt="" />
            <h5>Easy Booking</h5>
            <p>Square, was moving across the sand in their direction.</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img className='card-icons' src="./img/destination 1.png" alt="" />
            <h5>Best Tour Guide</h5>
            <p>What looked like a small patch of purple grass, above five feet.</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img className='card-icons' src="./img/destination 1.png" alt="" />
            <h5>Easy Booking</h5>
            <p>Square, was moving across the sand in their direction.</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
            <img className='card-icons' src="./img/destination 1.png" alt="" />
            <h5>Best Tour Guide</h5>
            <p>What looked like a small patch of purple grass, above five feet.</p>
          </div>
          </SwiperSlide>

  
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              
            </div>
            <div className="swiper-button-next slider-arrow">
             
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    );
}

export default CardSection;
