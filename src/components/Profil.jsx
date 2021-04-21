import React from 'react';
import './profil.css';

function Profil() {
  return (
    <div>
      <div id="connexion">Se déconnecter</div>
      <div>Jean Benguigui</div>
      <section id="wrapper">
        <h1>Historique de réservations</h1>
        <div className="white">
          <div id="inline">
            <h3>Commande effectuée le 13/12/20</h3>
            <div id="euros">Total 5 Euros</div>
          </div>
          <div id="inline">
            <section id="reservation">Réservation pour le 22/01/2021</section>
            <h3>
              <span>Annuler</span> la réservation
            </h3>
          </div>
        </div>
        <div className="white">
          <div id="inline">
            <h3>Commande effectuée le 13/12/20</h3>
            <div id="euros">Total 5 Euros</div>
          </div>
          <div id="inline">
            <section id="reservation">Réservation pour le 22/01/2021</section>
            <h3>
              <span>Annuler</span> la réservation
            </h3>
          </div>
        </div>
        <div className="white">
          <div id="inline">
            <h3>Commande effectuée le 13/12/20</h3>
            <div id="euros">Total 5 Euros</div>
          </div>
          <div id="inline">
            <section id="reservation">Réservation pour le 22/01/2021</section>
            <h3>
              <span>Annuler</span> la réservation
            </h3>
          </div>
        </div>
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
