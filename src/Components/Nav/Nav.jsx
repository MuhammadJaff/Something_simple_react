import './Nav.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const [active,setActive] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} 
      className={active === "#" ? "active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive('#about')} 
      className={active === "#about" ? "active":""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive('#experience')} 
      className={active === "#experience" ? "active":""}><MdOutlineWorkOutline/></a>
      <a href="#service" onClick={()=>setActive('#service')} 
      className={active === "#service" ? "active":""}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActive('#contact')} 
      className={active === "#contact" ? "active":""}><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav