import React, { useState } from 'react';
import './Reservation.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeKeeper from 'react-timekeeper';
import axios from 'axios';
import Stations from './Stations';

const fidelite =
  'https://media.discordapp.net/attachments/828980599762321419/832548533076754472/birthday-gifts.jpg';

function Reservation() {
  const [isShow, setIsShow] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [isShowMap, setIsShowMap] = useState(false);

  const [time, setTime] = useState('12:34pm');
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState([]);

  const loadMap = () => {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-marguerite-nantes-metropole&q='
      )
      .then((response) => {
        console.log(response);
        setLocation(response.data);
      });
  };

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
          <button
            className="boutton"
            type="button"
            time={time}
            onChange={(data) => setTime(data.formatted12)}
            onClick={() => setIsShowTime(!isShowTime)}
          >
            Horaire
          </button>
          {isShowTime ? <TimeKeeper /> : ''}
          <button
            className="boutton"
            type="button"
            onClick={() => {
              setIsShowMap(!isShowMap);
              loadMap();
            }}
          >
            Localisation
          </button>
          {isShowMap ? <Stations /> : ''}
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
                <strong>12€/mois</strong> sans engagement 5 € / heure 0,30€
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
          <footer />
        </div>
      </main>
    </div>
  );
}
export default Reservation;
