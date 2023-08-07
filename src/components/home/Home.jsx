import React from 'react'

import  "./home.css"

import Social from './Social'
import Data from './Data'
import Scrolldown from './Scrolldown'
import About from '../about/About'
import Portofolio from '../Portofolio/Portofolio'
import Skills from '../skills/Skills'
import Header from '../header/Header'
import Contact from '../contact/Contact'

const  Home=() => {
  return (
    <>
    <Header />
    <section className="home section" id="home">

        <div className="home__container container grid">

            <div className="home__content grid">

            <Social/>

            <div className="home__img"></div>
            
                <Data />

            </div>

            <Scrolldown/>

        </div>

    </section>
    <About />
    <Skills />
    <Portofolio />
    <Contact />
    </>
  )
}

export default Home
