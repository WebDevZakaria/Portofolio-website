import React from 'react'
import './skills.css'

function Backend() {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-django'></i>                <div>
                    <h3 className="skills__name">
                        Django
                    </h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-django' ></i>
                <div>
                    <h3 className="skills__name">
                        Django rest framework
                    </h3>
                </div>
                </div>



                
                <div className="skills__data">
                    <i class='bx bxl-github' ></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                    </div>
                    </div>



            </div>

        </div>
</div>
  )
}

export default Backend
