import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx  bx-medal-alt about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Fresher</span>
        </div>

        <div className="about__box">
            <i className='bx  bx-education about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">B.Tech Ai&Ds</span>
        </div>

        <div className="about__box">
            <i className='bx  bx-headphone-mic about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>

    </div>
  )
}

export default Info;
