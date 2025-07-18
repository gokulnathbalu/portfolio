import React from 'react'

const Backend = () => {
  return (
     <div className="skills__content">
        <h3 className="skills__title"></h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class= 'bx bx-badge-check'></i>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Intermediate</span>
                </div>

                <div className="skills__data">
                <i class= 'bx bx-badge-check'></i>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
                </div>

                <div className="skills__data">
                <i class= 'bx bx-badge-check'></i>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Basic</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend