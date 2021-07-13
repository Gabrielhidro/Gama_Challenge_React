import React from 'react'
import { TiSocialInstagramCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/gabriel_hardyfilth/"><TiSocialInstagramCircular size={50} /></a>
        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/gabrielfraitas"><TiSocialFacebookCircular size={50} /></a>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/gabriel-freitas-3910061b0/"><TiSocialLinkedinCircular size={50} /></a>
        <a rel="noreferrer" target="_blank" href="https://github.com/Gabrielhidro"><TiSocialGithubCircular size={50} /></a>
        <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5534984109482"><AiOutlineWhatsApp size={50} /></a>
      </div>
      <h3>Created by - Gabriel Freitas da Rocha</h3>
    </footer>
  )
}

export default Footer
