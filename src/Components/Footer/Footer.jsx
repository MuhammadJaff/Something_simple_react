import './Footer.scss'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MUHAMMAD JAFAR</a>

      <ul className='footer_links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://t.me/R_Muhammad_Jafar"><FaTelegramPlane/></a>
        <a href="https://www.instagram.com/mjr5535/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/muhammad-jafar-rahimjonzoda-513951226/"><FaLinkedinIn/></a>
      </div>

      <div className="footer_copy">
        <small>&copy; This layout was taken from FreeCodeCamp</small>
      </div>
    </footer>
  )
}

export default Footer