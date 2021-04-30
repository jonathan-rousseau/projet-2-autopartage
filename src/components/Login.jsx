import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="wrapper">
      <div id="center">
        <Link to="/">
          <img
            id="cross"
            alt="cross"
            src="https://cdn.discordapp.com/attachments/828980599762321419/834365801603268608/kisspng-computer-icons-christian-cross-icon-design-clip-ar-5afc2de4bc8555.6906750415264762607722-rem.png"
          />
        </Link>
        <div id="connexion" className="titre">
          Connexion
        </div>
        <div className="titre">
          Accéder à votre compte <span>Marguerite</span>
        </div>
        <form name="login">
          <input
            id="form"
            name="email"
            type="email"
            placeholder="email ou identifiant"
          />
          <input
            id="form"
            name="password"
            type="password"
            placeholder="mot de passe"
          />
          <button id="form" type="submit">
            Se connecter
          </button>
          <button id="form" type="submit">
            Inscrivez-vous ici
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
