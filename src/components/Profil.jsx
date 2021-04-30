import React, { useState } from 'react';
import ElementReservation from './ElementReservation';
import './profil.css';

function Profil() {
  const [infoReservation, setInfoReservation] = useState([
    {
      commandDate: '01/01/2021',
      price: 5,
      reservDate: '12/03/2015',
      active: true,
      id: 1,
    },
    {
      commandDate: '15/05/2020',
      price: 15,
      reservDate: '25/03/2018',
      active: true,
      id: 2,
    },
    {
      commandDate: '20/12/2019',
      price: 20,
      reservDate: '03/03/2017',
      active: true,
      id: 3,
    },
  ]);
  function disableReservation(id) {
    const reservationFound = infoReservation.find(
      (reservation) => reservation.id === id
    );
    reservationFound.active = false;
    setInfoReservation([
      ...infoReservation.filter((r) => r.id !== id),
      reservationFound,
    ]);
  }
  return (
    <div>
      <div id="connexion">Se déconnecter</div>
      <div>Jean Benguigui</div>
      <section id="wrapper">
        <h1>Historique de réservations</h1>
        {infoReservation
          .filter((info) => info.active === true)
          .map((reservation) => (
            <ElementReservation
              commandDate={reservation.commandDate}
              price={reservation.price}
              reservDate={reservation.reservDate}
              id={reservation.id}
              disableReservation={disableReservation}
            />
          ))}
      </section>

      <section id="wrapper">
        <h1 className="param">Paramètres</h1>
        <div className="param">Changer sa photo</div>
        <div className="param">Changer sa description</div>
        <div className="param">Changer la langage</div>
      </section>
    </div>
  );
}

export default Profil;
