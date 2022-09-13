import './Contact.scss'
import {BiEnvelope} from 'react-icons/bi'
import {TbBrandTelegram} from 'react-icons/tb'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {

  const data = [
    {
      id:1,
      logo:<BiEnvelope/>,
      name:"Email",
      address:"muhammadjaff04@gmail.com",
      link:"mailto:muhammadjaff04@gmail.com"
    },
    {
      id:2,
      logo:<TbBrandTelegram/>,
      name:"Telegram",
      address:"R_Muhammad_Jafar",
      link:"https://t.me/R_Muhammad_Jafar"
    },
    {
      id:3,
      logo:<AiOutlinePhone/>,
      name:"Mobile phone",
      address:"998946535535",
      link:"+998946535535"
    }
  ]

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_messenger">
            {
              data.map(({id,name,link,logo,address})=>{
                return(
                  <article key={id}>
                    <h4>{logo}</h4>
                    <h5>{name}</h5>
                    <p>{address}</p>
                    <a href={link} target="_blank">message</a>
                  </article>
                )
              })
            }
        </div>
        <div className="contact_email">
          <div>
            <input className='email_input' type="text" placeholder='Your Name...'/><br />
            <input className='email_input' type="text" placeholder='Your Email...'/>
          </div>
            <textarea className='email_textarea' placeholder='Your message...' cols="30" rows="10"></textarea>
            <button className='btn btn-primary'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default Contact