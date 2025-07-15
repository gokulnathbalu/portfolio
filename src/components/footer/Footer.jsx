import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Gokulnath</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/gokulnathbalu" className="footer__social-link" target= "_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
