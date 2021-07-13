import React from 'react'
import Animation from '../../images/animation.json'
import Lottie from 'react-lottie'
import './style.css'


const FormSection = () => {
  const defaultOptions  = {
    loop: true,
    autoplay: true,
    animationData: Animation
  }

  return (
    <section className="form-section">
      <h1>Receba seu cupom de desconto</h1>
      <div className="form-container">
        <Lottie options={defaultOptions} width={300}/>
        <form>
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome*" required={true}/>
          <input type="email" placeholder="Email*" required={true}/>
          <p>Termos e condições:</p>
          <div className="form-check">
            <input type="checkbox" />
            <label htmlFor="">Aceito receber emails referente as promoções da Gamma-commerce</label>
          </div>
          <button className="btn-form">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default FormSection
