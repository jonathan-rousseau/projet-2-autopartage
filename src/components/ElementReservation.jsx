import React from 'react';
import './profil.css';

function ElementReservation(props) {
  // eslint-disable-next-line react/prop-types
  const { commandDate, price, reservDate } = props;
  return (
    <div className="white">
      <div id="inline">
        <h3>Commande effectuée le {commandDate}</h3>
        <div id="euros">Total {price} Euros</div>
      </div>
      <div id="inline">
        <section id="reservation">Réservation pour le {reservDate}</section>
        <h3>
          <span>Annuler</span> la réservation
        </h3>
      </div>
    </div>
  );
}

export default ElementReservation;
