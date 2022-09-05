import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/muhammad-jafar-rahimjonzoda-513951226/">
        <BsLinkedin/></a>
        <a href="https://github.com/MuhammadJaff"><BsGithub/></a>
        <a href="https://instagram.com/mjr5535/"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials