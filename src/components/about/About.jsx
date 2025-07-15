import React from 'react';
import './about.css'; 
import AboutImg from "../../assets/about.jpeg";
import CV from "../../assets/Gokulnath B resume.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id= "about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction!</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />

            <div className="about__data">
                <Info/>

                <p className="about__description">
                    Front-end developer, I create web pages with UI/UX user interface. 
                    Proficient in HTML, CSS, and JavaScript, with a strong focus on user experience and performance optimization. 
                    Eager to contribute to innovative projects and collaborate with cross-functional teams.
                </p>
                <a download="" href={CV} className="button button--flex">Download Resume</a>
            </div>
        </div>
    </section>
  )
}

export default About;