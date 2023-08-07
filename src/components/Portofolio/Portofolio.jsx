import React from 'react'
import './portofolio.css'
import Works from './Works'

function Portofolio() {
  return (
    <section className="work section" id="portofolio">
      <h2 className="mx-[800px] relative top-[-80px] text-[30px]" >Portofolio</h2>
      <span className="text-white"></span>

     <Works/>
    </section>
  )
}

export default Portofolio
