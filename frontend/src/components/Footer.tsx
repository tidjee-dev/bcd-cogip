
import "../styles/components/_footer.scss";
import location from '../assets/cogip/location.png';
import phone from '../assets/cogip/phone.png';
import printer from '../assets/cogip/printer.png';
import facebook from '../assets/cogip/facebook .1.png';
import twitter from '../assets/cogip/Twitter.png';
import linkedIn from '../assets/cogip/LinkedIn.png';
import youtube from '../assets/cogip/youtube color.1.png';
import instagram from '../assets/cogip/instagram.png';
import googleplus from '../assets/cogip/googleplus black.1.png';
import pinterest from '../assets/cogip/pinterest.png';
import wifi from '../assets/cogip/wifi.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-info">
        <h1>COGIP</h1>
        <div className="info">
          <p className="location"> <img src={location} alt="" /> Square des Martyrs, 6000 Charleroi</p>
          <div className="numbers">
            <div className="number1">
              <img src={phone} alt="" /> 
              <p> (123) 456-7890</p>
            </div>
            <div className="number2">
              <img src={printer} alt="printer icon" />
              <p>(123) 456-7890</p>          
            </div>
          </div>
          <div className="media">
            <p>Social Media</p>
          
            <div className="icons">
              <img src={facebook} alt="facebook icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={linkedIn} alt="linkedIn icon" />
              <img src={youtube} alt="youtube icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={googleplus} alt="googleplus icon" />
              <img src={pinterest} alt="pinterest icon" />
              <img src={wifi} alt="wifi icon" />
            </div>

        </div>
      </div>
      </div>
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li><a href="Home">Home</a> </li> 
            <li><a href="invoice">Invoices</a></li>
            <li><a href="Companies">Companies</a></li>
            <li><a href="Contacts">Contacts</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            </ul>
        </nav>
        <p className="copyright">Copyright © 2022 • COGIP Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
