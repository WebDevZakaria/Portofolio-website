import React from 'react'
import './skills.css'

function Frontend() {
  return (
    <div className="skills__content">

        <h3 className="skills__title">Frontend developer </h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxl-html5' ></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-css3' ></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-javascript' ></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                    </div>

                    </div>
                    
            
                </div>



                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxl-tailwind-css' ></i>
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                    </div>
                    </div>


                    <div className="skills__data">
                    <i class='bx bxl-react' ></i>
                    <div>
                        <h3 className="skills__name">React js</h3>
                    </div>
                    </div>
                    
                    <div className="skills__data">
                    <i class='bx bxl-javascript' ></i>
                    <div>
                        <h3 className="skills__name">Next js</h3>
                    </div>

                    </div>


                    
                


                </div>
                


            </div>
    </div>
  )
}

export default Frontend
