import React,{useState} from 'react';

//import { motion } from 'framer-motion';

//import Header from '../header/Header';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
//import { fadeIn,staggerContainer } from '../../variants';
import RESTAURANT from '../../assets/11.jpg'
import { Link } from 'react-router-dom';
import Headerss from './Headerss';
import MENU from '../../assets/menu.png'
import RESTA from '../../assets/restaurant.png'

import SingleMenu from '../../assets/singlemenu.png'
import CARD from '../../assets/Card.png'
import BOKING from '../../assets/bokking.png'

import { motion } from 'framer-motion';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Tailwind from '../../assets/tailwind.png';
import { plateVariants, fadeIn,staggerContainer } from '../../variants';

import  './homes.css'

function Singleprjectss() {

  const slides = [
    {
      url: RESTA,
    },
    {
      url: MENU,
    },
    {
      url: SingleMenu,
    },

    {
      url: CARD,
    },
    {
      url: BOKING,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };






    
  return (

    <>
    <Headerss />
    <section className='w-full h-[550px] text-white  text-center'>

        <motion.div variants={staggerContainer(0.3, 1)} initial = 'hidden' whileInView={'show'} className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={RESTAURANT} alt='' />
            <div className=' absolute w-full top-[20%] p-4 md:p-8 '>
                <motion.h1 variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='text-3xl md:text-5xl font-bold'>Restaurant App</motion.h1>
            <motion.div variants={fadeIn('down','spring',0.2, 1.1,1000,400)} className='my-4'>
                <Link to= 'https://resonant-pothos-157e14.netlify.app'><button className=' border bg-gray-300 text-black  border-gray-300 rounded-lg py-2 px-5'>Live Demo</button></Link>
                <Link to ='https://github.com/zikou24/Restaurant-app'><button className='border  text-white border-gray-300 py-2 px-5 ml-5 rounded-lg br- hover:bg-gray-300 hover:text-black '>github</button></Link>
            </motion.div>
            <motion.p variants={fadeIn('down','spring',0.4, 1.1,1000,400)} className='text-gray-200 text-sm my-10'>reastaurant app with tailwind css and react js </motion.p>

            <p className='w-full ml-[32%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-400 text-center  py-8'></p> 

            </div>

        </motion.div>
      
    </section>

    <section className='section h-[600px] my-20 '>
    <div className='container mx-[120px]'>

      <h1 className='lg:mx-[340px] mx-[120px] relative top-[-60px] lg:text-[20px] '>Restaurant Application</h1>

      <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.6 }} className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[20px]'>

        <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)}  className='flex-1 bg-pink-300/40 mx-28 p-8 rounded-2xl m-8 ' data-aos = 'fade-right'>

          <h2 className='text-[30px] text-white pb-4'>
          About
      </h2>
      <p className='lead'> I create this web application using tailwind css,framer motion and  react js<br/><br/>
      the fonctionnality : <br /><br />
      consult the menu<br />
Ordering & Delivery <br />
Booking Form <br />
Clients Reviews form  <br />
Register page <br />
Login page  <br />
Add To Card Page <br />
Shipping  page  <br />
Order page  <br />

      </p>

      <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all '></button>
      </motion.div>
      <motion.div variants={plateVariants} className='home__imgs' data-aos = 'fade-left' data-aos-offset = '300' >
      
      </motion.div>
</motion.div>
</div>

</section>;











<h1 className=' mx-[180px] lg:mx-[680px] lg:text-[50px] relative top-[80px]'>Overview</h1>

<section className='section h-[600px] my-20'>



<div className='max-w-[1400px] h-[580px] w-full m-auto top-[-80px] px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

</section>


<section className='section h-[200px]'>
<div name='skills' className='w-full  text-gray-300'>
      {/* Container */}
      <motion.div variants={staggerContainer(0.3, 1)} initial = 'hidden' whileInView={'show'} className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative top-[-120px]'>
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.8)} >
              <p className='text-4xl mx-[160px] lg:mx-[440px] font-bold inline border-b-4 border-pink-600 text-black '>Skills</p>
              <p className='py-4 text-black'> These are the technologies I've worked with in this project</p>
          </motion.div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <motion.div variants={fadeIn('down', 'tween', 0.4, 1.8)}  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-black'>HTML</p>
              </motion.div>
              <motion.div variants={fadeIn('down', 'tween', 0.6, 1.8)}  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-black'>CSS</p>
              </motion.div>
              <motion.div variants={fadeIn('down', 'tween', 0.8, 1.8)}  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-black'>JAVASCRIPT</p>
              </motion.div>
              <motion.div variants={fadeIn('down', 'tween', 1, 1.8)}  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-black'>REACT</p>
              </motion.div>
              
             
              <motion.div variants={fadeIn('down', 'tween', 1.2, 1.8)}  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-black'>TAILWIND CSS</p>
              </motion.div>
             
          </div>
      </motion.div>
    </div>
</section>





    </>
  )
}

export default Singleprjectss
