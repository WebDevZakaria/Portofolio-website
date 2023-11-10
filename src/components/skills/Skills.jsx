import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {
  return (

    <section className="skills section" id="skills">

      <h2 className="section__title" style={{color:'red'}}>Skills</h2>
      <span className='section__subtitle' style={{color:'white'}}> technical level  </span>

      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>

      </div>

    </section>
     
    
    
  )
}

export default Skills
