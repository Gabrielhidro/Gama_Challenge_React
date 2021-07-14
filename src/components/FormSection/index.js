import React, { useState } from "react";
import Animation from "../../images/animation.json";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const dataArray = [name, email];
    if (checked) {
      localStorage.setItem("dataKey", JSON.stringify(dataArray));
      toast.success("Nome e E-mail salvos no LocalStorage!");
    }

    setName("");
    setEmail("");
  }

  return (
    <section className="form-section">
      <h1>Receba seu cupom de desconto</h1>
      <div className="form-container">
        <Lottie options={defaultOptions} width={300} />
        <form id="form" onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Nome*"
            required={true}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email*"
            required={true}
          />
          <p>Termos e condições:</p>
          <div className="form-check">
            <input
              value={checked}
              onChange={() => setChecked(!checked)}
              type="checkbox"
            />
            <label htmlFor="">
              Aceito receber emails referente as promoções da Gamma-commerce
            </label>
          </div>
          {checked ? (
            <button id="btn" type="submit" className="btn-form">
              Cadastrar
            </button>
          ) : (
            <button id="btn" type="submit" className="btn-form" disabled>
              Cadastrar
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default FormSection;
