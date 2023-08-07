import React from 'react'
import './about.css'
function Info() {
  return (
    <div className='about__info grid'>
        <div className="about__box">
         <i class='bx bx-award'></i>
         <h3 className="about__title">Experiences</h3>
         <span className="about__subtitle"> 2 years working with django and react js  </span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt' ></i>
            <h3 className="about__title">Recent Projects</h3>
            <span className="about__subtitle"> 7 project </span>
            
        </div>

        <div className="about__box">
        <i class='bx bx-support' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">  </span>
        </div>

    </div>
  )
}

export default Info
