import './Contact.scss'
import {BiEnvelope} from 'react-icons/bi'
import {TbBrandTelegram} from 'react-icons/tb'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ck8xdk7', 'template_ww4myn6', form.current, 'xldzS1hAZGyabIL-c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
      address:"+998946535535",
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
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input required className='email_input' name='name' type="text" placeholder='Your Name...'/><br />
              <input required className='email_input' name='email' type="text" placeholder='Your Email...'/>
            </div>
              <textarea required className='email_textarea' name='message' placeholder='Your message...' cols="10" rows="10"></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact