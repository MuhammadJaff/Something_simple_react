import CV from './../../images/CV.pdf'

const CVFile = () => {
  return (
    <div className='ctfile'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CVFile