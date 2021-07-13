import React from 'react'
import logo from '../../images/gama_logo.png'
import './style.css'

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img className="logo" src={logo} alt="" />
        <button className="button-lead" type="button">Cadastre-se</button>
      </div>
    </header>
  )
}

export default Header
