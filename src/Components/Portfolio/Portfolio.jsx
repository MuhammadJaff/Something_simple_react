import './Portfolio.scss'
import img1 from './../../images/portfolio1.jpg'
import img2 from './../../images/portfolio2.jpg'
import img3 from './../../images/portfolio3.jpg'
import img4 from './../../images/portfolio4.jpg'
import img5 from './../../images/portfolio5.png'
import img6 from './../../images/portfolio6.jpg'


const Portfolio = () => {

  const data = [
    {
      id:1,
      image:img1,
      github:"https://github.com/MuhammadJaff/Something_simple_react",
      title:"This project"
    },
    {
      id:2,
      image:img2,
      github:"https://github.com/MuhammadJaff/Something_simple",
      title:"Something simple"
    },
    {
      id:3,
      image:img3,
      github:"https://github.com/MuhammadJaff/React_first_pro",
      title:"First React Project"
    },
    {
      id:4,
      image:img4,
      github:"https://github.com/MuhammadJaff/Triple_simple",
      title:"Triple simple"
    },
    {
      id:5,
      image:img5,
      github:"https://github.com/MuhammadJaff/Sneakmax",
      title:"Sneakmax"
    },
    {
      id:6,
      image:img6,
      github:"https://github.com/MuhammadJaff/React_simple_ffs24",
      title:"Fast_Food_Service"
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,title,github,image})=>{
          return(
            <article key={id} className='portfolio_item'>
              <div className="port_img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a className='btn githubb' href={github} target='_blank'>Github</a>
              <a className='btn btn-primary' href="mailto:muhammadjafarrahimjonzoda@gmail.com" target='_blank'>Comments</a>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio