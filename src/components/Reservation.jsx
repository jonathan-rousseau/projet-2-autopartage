import React, { useState } from 'react';
import './Reservation.css';
import Calendar from 'react-calendar';

const fidelite =
  'https://media.discordapp.net/attachments/828980599762321419/832548533076754472/birthday-gifts.jpg';

function Reservation() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container">
      <header />
      <main>
        <div className="direction-boutton">
          <button
            className="boutton calendar"
            type="button"
            onClick={() => setIsShow(!isShow)}
          >
            Date
          </button>
          {isShow ? <Calendar /> : ''}
          <button className="boutton" type="button">
            Horaire
          </button>
          <button className="boutton" type="button">
            Localisation
          </button>
        </div>
        <div className="tarif">
          <div className="liberty">
            <h1>Formule Liberté</h1>
            <p>
              <strong>0€/mois</strong> pour un usage ponctuel 10€/ heure 0,50€
              /km, carburant inclus
            </p>
          </div>
          <div className="eco">
            <h1>Formule Eco</h1>
            <p>
              <strong>12€/mois</strong> sans engagement 5 € / heure 0,30€ /km,
              carburant inclus
            </p>
          </div>
          <div>
            <button className="reserver" type="button">
              Reserver
            </button>
          </div>
        </div>
        <div>
          <img className="fidelite" src={fidelite} alt="fidelite" />
        </div>
      </main>
      <footer />
    </div>
  );
}
export default Reservation;
