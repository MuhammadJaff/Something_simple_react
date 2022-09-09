import './About.scss'
import meAbout from './../../images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {HiFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about_section' id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={meAbout} alt="me_about" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_card_icon'/>
              <h5>Experience</h5>
              <small>1+ year</small>
            </div>
            <div className="about_card">
              <FaChalkboardTeacher className='about_card_icon'/>
              <h5>Collegues</h5>
              <small>5+ seniors</small>
            </div>
            <div className="about_card">
              <HiFolderOpen className='about_card_icon'/>
              <h5>Projects</h5>
              <small>7+ finished</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis nostrum minima ut laudantium recusandae ducimus 
            fugit dolorum autem? Sint officiis sapiente, itaque blanditiis 
            at voluptatum, aut ipsam corrupti praesentium quae ratione, sequi unde?
          </p>

          <a href="" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About