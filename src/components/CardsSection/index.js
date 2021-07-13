import React from 'react'
import './style.css'

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="card">
        <h1>1°</h1>
        <p>Cadastre seu email no formulário abaixo ou clique no botão do topo da página</p>
      </div>
      <div className="card">
        <h1>2°</h1>
        <p>Verifique seu email, enviaremos o seu cupom de desconto</p>
      </div>
      <div className="card">
        <h1>3°</h1>
        <p>Baixe nosso App Oficial no AppStore</p>
      </div>
      <div className="card">
        <h1>4°</h1>
        <p>Acesse nossos produtos com o cupom enviado e desfrute das promoções</p>
      </div>
    </section>
  )
}

export default CardsSection
