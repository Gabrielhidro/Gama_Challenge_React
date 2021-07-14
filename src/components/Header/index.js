import React from 'react'
import logo from '../../images/gama_logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import './style.css'

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img className="logo" src={logo} alt="" />
        <Link to="form" smooth={true}><button href="#form" className="button-lead" type="button">Cadastre-se</button></Link>
      </div>
    </header>
  )
}

export default Header
