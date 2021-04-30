import React from 'react';
import './Inscription.css';
import Header from './Header';
import Footer from './FooterComponent';

function Inscription() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div id="center">
          <a href>
            <img
              className="cross"
              alt="cross"
              src="https://cdn.discordapp.com/attachments/828980599762321419/834365801603268608/kisspng-computer-icons-christian-cross-icon-design-clip-ar-5afc2de4bc8555.6906750415264762607722-rem.png"
            />
          </a>
          <div className="titre">
            <strong>
              Inscrivez-vous à <span>marguerite</span>
            </strong>
          </div>
          <div className="titre">
            <p>
              <em>C&apos; est simple et rapide...suivez le mouvement !</em>
            </p>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Male"
                id="inlineRadio1"
              />
            </div>
            <div className="form-check-label" htmlFor="inlineRadio1">
              Male
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Female"
                id="inlineRadio2"
              />
            </div>
            <div className="form-check-label" htmlFor="inlineRadio2">
              Female
            </div>
          </div>
          <form name="login">
            <input
              id="form"
              name="lastname"
              type="lastname"
              placeholder="Nom"
            />
            <input
              id="form"
              name="firstname"
              type="firstname"
              placeholder="Prénom"
            />
            <input
              id="form"
              name="address"
              type="address"
              placeholder="Adresse"
            />
            <div>
              <input
                id="form-diff-citynumber"
                name="citynumber"
                type="citynumber"
                placeholder="Code postal"
              />
              <input
                id="form-diff-city"
                name="city"
                type="city"
                placeholder="Ville"
              />
            </div>
            <input id="form" name="country" type="country" placeholder="Pays" />
            <input id="form" name="email" type="email" placeholder="Email" />
            <input
              id="form"
              name="numberphone"
              type="numberphone"
              placeholder="Mobile"
            />

            <button id="form" type="submit">
              <strong>Valider</strong>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inscription;
