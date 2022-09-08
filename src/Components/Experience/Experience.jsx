import './Experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container_experience ">
        <div className="frontend_ex">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>CSS/SASS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>REACT</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            <div className="experience_item">
              <BsPatchCheckFill className="front_icon"/>
              <h4>Redux</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </div>

        </div>
        <div className="backend_ex">
          <h3>Backend Development</h3>
          <h2 className='back_come'>Coming soon...</h2>
        </div>
      </div>
    </section>
  )
}

export default Experience