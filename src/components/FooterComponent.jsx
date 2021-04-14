import React from 'react';
import './footer.css';

const logo =
  'https://cdn.discordapp.com/attachments/828980599762321419/831816484673945600/Logo_Marguerite-removebg-preview.png';
const facebook =
  'https://cdn.discordapp.com/attachments/828980599762321419/831817333931900958/facebook-transparent-5a22b45ab05884.1144870015122238347223-removebg-preview1-removebg-preview.png';
const instagram =
  'https://cdn.discordapp.com/attachments/828980599762321419/831818141742268436/kisspng-logo-computer-icons-white-instagram-5b2d14ce620c29.2273864015296811024016-removebg-preview1.png';
const twitter =
  'https://cdn.discordapp.com/attachments/828980599762321419/831818609361813564/twitter-logo-png-5a355d8a863ba6.9233809415134467945498-removebg-preview1.png';
const tan = 'https://www.imarguerite.com/upload/images/partenaires/logoTAN.png';
const bicloo =
  'https://www.imarguerite.com/upload/images/partenaires/bicloo.png';
const nantes =
  'https://www.imarguerite.com/upload/images/partenaires/NantesMetropole.png';
const europcar =
  'https://www.imarguerite.com/upload/images/partenaires/EAlogo.png';

function FooterComponent() {
  return (
    <div>
      <footer>
        <div id="partDiv">
          <img className="partenaire" alt="tan" src={tan} />
          <img className="partenaire" alt="bicloo" src={bicloo} />
          <img className="partenaire" alt="nantes" src={nantes} />
          <img className="partenaire" alt="europcar" src={europcar} />
        </div>
        <div id="flex">
          <div id="logoPic">
            <img id="logo" alt="logo" src={logo} />
          </div>
          <div id="text">
            <h4>Suivez nous sur :</h4>
          </div>
          <img className="contentFooter" id="fb" alt="fb" src={facebook} />
          <img className="contentFooter" id="ig" alt="ig" src={instagram} />
          <img className="contentFooter" id="tt" alt="tt" src={twitter} />
        </div>
      </footer>
    </div>
  );
}
export default FooterComponent;
