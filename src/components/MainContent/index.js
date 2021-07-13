import React from 'react'
import Banner from '../../images/banner.png'
import './style.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <img src={Banner} alt="" />
      <div className="main-content-text">
        <h1>NOVIDADES</h1>
        <h2>Vem ai a <span>GAMMAFRIDAY</span>, com uma mega liquidação e produtos com até <span>50% DE DESCONTO</span>. Quer ficar por dentro das novidades? <span>CADASTRE SEU EMAIL</span> e receba antes de todo mundo nossas <span>PROMOÇÕES</span> que não devem durar muito tempo!</h2>
      </div>
    </main>
  )
}

export default MainContent
