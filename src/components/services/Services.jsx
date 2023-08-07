import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay , Pagination, Navigation } from "swiper";
import './services.css'

function Services() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 10000)}s`;
  };

 
  return (
    <section className="services section" id='services'>

      <h2 className="section__title">Services</h2>

      <span className="section__subtitle">What i offer </span>

      <Swiper 
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",

          "width":"650px", 
          "background-color": "var(--container-color)"

        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        
        className="services__container container grid mySwiper">

        <SwiperSlide className="services__content" >

          <div>

            <h3 className="services__title">Frontend  devlopement</h3>

          </div>

          <div className="services__modal ">
            <div className="services__modal-content">
             
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">i create user interface </p>

                </li>

               

                <li className="services__modal-service">

                  <i className="uil uil-check-circle  services__modal-icon"></i>  
                  <p className="services__modal-info"> make your ecommerce  business website  </p>

                </li>

              </ul>

            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className="services__content">
          <div>
            <h3 className="services__title">Backend devloppement </h3>
          </div>
          <div className="services__modal">
            <div className="services__modal-content">
              
              <ul className="services__modal-services grid">    
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">make API </p>
                </li>
              

                <li className="services__modal-service">

                  <i className="uil uil-check-circle  services__modal-icon"></i>  

                  <p className="services__modal-info"> i will make your business website </p>
                  
                </li>

              </ul>

            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" style= {{opacity:0}}></circle>
          </svg>
          <span ref={progressContent} style= {{opacity:0}}></span>
        </div>
      </Swiper>

    </section>
  )
}

export default Services

