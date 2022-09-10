import './Portfolio.scss'
import img1 from './../../images/portfolio1.jpg'
import img2 from './../../images/portfolio2.jpg'
import img3 from './../../images/portfolio3.jpg'
import img4 from './../../images/portfolio4.jpg'
import img5 from './../../images/portfolio5.png'
import img6 from './../../images/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="port_img">
            <img src={img1} alt="" />
          </div>
          <h3>Something_simple</h3>
          <a className='btn githubb' href="https://github.com/MuhammadJaff/Something_simple" target='_blank'>Github</a>
          <a className='btn btn-primary' href="mailto:muhammadjafarrahimjonzoda@gmail.com" target='_blank'>Comments</a>
        </article>
        <article className='portfolio_item'>
          <div className="port_img">
            <img src={img2} alt="" />
          </div>
          <h3>Something_simple</h3>
          <a className='btn githubb' href="https://github.com/MuhammadJaff/Something_simple" target='_blank'>Github</a>
          <a className='btn btn-primary' href="mailto:muhammadjafarrahimjonzoda@gmail.com" target='_blank'>Comments</a>
        </article>
        <article className='portfolio_item'>
          <div className="port_img">
            <img src={img3} alt="" />
          </div>
          <h3>Something_simple</h3>
          <a className='btn githubb' href="https://github.com/MuhammadJaff/Something_simple" target='_blank'>Github</a>
          <a className='btn btn-primary' href="mailto:muhammadjafarrahimjonzoda@gmail.com" target='_blank'>Comments</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio