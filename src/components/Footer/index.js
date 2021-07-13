import React from 'react'
import { TiSocialInstagramCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <TiSocialInstagramCircular size={50} />
        <TiSocialFacebookCircular size={50} />
        <TiSocialLinkedinCircular size={50} />
        <TiSocialGithubCircular size={50} />
        <AiOutlineWhatsApp size={50} />
      </div>
      <h3>Created by - Gabriel Freitas da Rocha</h3>
    </footer>
  )
}

export default Footer
