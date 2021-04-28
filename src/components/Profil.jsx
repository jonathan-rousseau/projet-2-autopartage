import React from 'react';
import ElementReservation from './ElementReservation';
import './profil.css';

const infoReservation = [
  {
    commandDate: '01/01/2021',
    price: 5,
    reservDate: '99/99/9999',
  },
  {
    commandDate: '15/05/2020',
    price: 15,
    reservDate: '25/03/2018',
  },
  {
    commandDate: '20/12/2019',
    price: 5,
    reservDate: '03/03/2017',
  },
];
function Profil() {
  return (
    <div>
      <div id="connexion">Se déconnecter</div>
      <div>Jean Benguigui</div>
      <section id="wrapper">
        <h1>Historique de réservations</h1>
        {infoReservation.map((reservation) => (
          <ElementReservation
            commandDate={reservation.commandDate}
            price={reservation.price}
            reservDate={reservation.reservDate}
          />
        ))}

        <ElementReservation />
        <ElementReservation />
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

/*
Créer un conposant de réservation, (valeur en dure)
Tester que sa s'affiche bien dans le profil
Envoyer les valeurs en props
Créer un tableau d'objet de réservation et faire un map sur ce tableau pour afficher la liste des réservations
Filter pour afficher ou cacher le composant (statelifting)
*/
