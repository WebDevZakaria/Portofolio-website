import React from 'react'
import { Link } from 'react-router-dom'

function WorksItems({item}) {
  return (
    <div className='work__card' key={item.id} >

        <Link to= '/singleprojectss'><img src={item.image} alt="" className='work__img' /> </Link>
        <Link to= '/singleprojectss'><h3 className="work__title">{item.title}</h3></Link>
        <h4 style={{fontSize:'12px',}}>{item.description}</h4>
        <br/>
        <div  style={{display:'flex'}}>
        <a href={item.href} className="work__button">
            Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

        <a href={item.github} className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

        </div>
    </div>
  )
}

export default WorksItems
