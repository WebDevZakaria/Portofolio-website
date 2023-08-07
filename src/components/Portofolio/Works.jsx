import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorksItems from './WorksItems'

import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"
import { Link } from 'react-router-dom'
import RESTA from '../../assets/restaurant.png'
import NETFLIX from '../../assets/netflix.png'

import HANDY from '../../assets/handy.png'

import ONLINE from '../../assets/HOME.png'

import PHONE from '../../assets/PHONE ECOMMERCE.png'
import CONNECT from '../../assets/connect.png'

import COMMERCEE from '../../assets/reactcommerce.png'
import OPENTABLE from '../../assets/restu.png'




function Works() {

  const [item,setItem] = useState({name: 'All' });
  const [projects,setProjects] = useState([])
  const [active,setActive] = useState(0)


  useEffect (()=>{
    if(item.name === 'All'){
      
      setProjects(projectsData);

    }

    else{
      const newProjects = projectsData.filter((project)=>{

       return project.category === item.name;

      });
      setProjects(newProjects);

    }
  },[item]);

  const handleClick = (e,index)=>{
    setItem({name:e.target.textContent})
    setActive(index)

  }

  return (
    <div className='relative top-[-100px]'>
 
   <h1 className='mx-[690px] mb-8'> </h1>

   <div className="work__container container grid"> 

  
   <div className='work__card'>

        <Link to= '/'><img src={NETFLIX} alt="" className='work__img' /> </Link>
        <Link to= '/'><h3 className="work__title">Netflix clone</h3></Link>
        <h4 style={{fontSize:'12px',}}>i build The Front-end fonctionnalite for this application</h4>
        <br/>
        <div  style={{display:'flex'}}>
        <a href='https://incredible-chebakia-bf8687.netlify.app/' className="work__button">
            Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

        <a href='https://github.com/zikou24/Netflix-clone' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>
        
        </div>
    </div>


    <div className='work__card'>

<Link to= '/handymen'><img src={HANDY} alt="" className='work__img' /> </Link>
<Link to= '/handymen'><h3 className="work__title">search for handyman from home</h3></Link>
<h4 style={{fontSize:'12px',}}>i build all the backend for this application with django</h4>
<br/>
<div  style={{display:'flex'}}>
<a href='https://web-production-0fe3.up.railway.app/' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/Django-App-search-for-handyman-by-State-' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>


<div className='work__card'>

<Link to= '/'><img src={COMMERCEE} alt="" className='work__img' /> </Link>
<Link to= '/'><h3 className="work__title">E commerce Website</h3></Link>
<h4 style={{fontSize:'12px',}}>i build this application with react js and djangorest</h4>
<br/>
<div  style={{display:'flex'}}>
<a href='/' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/Ecommerce' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>

<div className='work__card'>

<Link to= '/singleprojectss'><img src={RESTA} alt="" className='work__img' /> </Link>
<Link to= '/singleprojectss'><h3 className="work__title">Restaurant app</h3></Link>
<h4 style={{fontSize:'12px',}}>this is front end restaurant app with tailwind framer motion and react js </h4>
<br/>
<div  style={{display:'flex'}}>
<a href='https://resonant-pothos-157e14.netlify.app' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/Restaurant-app' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>

<div className='work__card'>

<Link to= '/onlineProject'><img src={ONLINE} alt="" className='work__img' /> </Link>
<Link to= '/onlineProject'><h3 className="work__title">Online Learning website</h3></Link>
<h4 style={{fontSize:'12px',}}>online Courses with tialwind css and react</h4>
<br/>
<div  style={{display:'flex'}}>
<a href='https://dashing-douhua-c7111c.netlify.app' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/E-Learning-Website' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>

<div className='work__card'>

<Link to= '/phoneecommerce'><img src={PHONE} alt="" className='work__img' /> </Link>
<Link to= '/phoneecommerce'><h3 className="work__title">E commerce Website for phone</h3></Link>
<h4 style={{fontSize:'12px',}}>i build full e-commerce website using django</h4>
<br/>
<div  style={{display:'flex'}}>
<a href='https://zaki123.pythonanywhere.com/' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/Phoneapp' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>

<div className='work__card'>

<Link to= '/'><img src={CONNECT} alt="" className='work__img' /> </Link>
<Link to= '/'><h3 className="work__title">Connect with devloper</h3></Link>
<h4 style={{fontSize:'12px',}}>My First Website Using Django </h4>
<br/>

<div  style={{display:'flex'}}>

<a href='https://web-production-e78f.up.railway.app/' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/zikou24/search-for-devlopper-website' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>

<div className='work__card'>

<Link to= '/'><img src={OPENTABLE} alt="" className='work__img' /> </Link>
<Link to= '/'><h3 className="work__title">AllRestaurant</h3></Link>
<h4 style={{fontSize:'12px',}}>Website To search for the restaurant you want  </h4>
<br/>

<div  style={{display:'flex'}}>

<a href='https://brrestaurant.vercel.app/' className="work__button">
    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
</a>

<a href='https://github.com/WebDevZakaria/Next-js-App' className='home__social-icon' target="_blank" style={{marginLeft:'15px',fontSize:'14px' ,color:'darkred'}}><i class="uil uil-github"></i> github repo </a>

</div>
</div>













     </div>
   </div>
  )
}

export default Works
