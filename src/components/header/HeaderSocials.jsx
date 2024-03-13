import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/arun-prasad-9071274/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/arunp44" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials