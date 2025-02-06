import imgUser from '../../assets/pexels-italo-melo-2379004 1.png';
import IconDashboard from '../../assets/dashboard.svg';
import IconInvoices from '../../assets/Icon_Invoices.svg';
import IconCompanies from '../../assets/Icon_Companies.svg';
import IconContacts from '../../assets/Icon_contact.svg';
import ExempleImg from '../../assets/example-scene-2 1.png';
import Company from './Company';
import Contact from './Contacts';
import Invoice from './Invoices';
import { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

export default function Dashboard() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const onglets = document.querySelectorAll('.onglet');
    const contenu = document.querySelectorAll('.contenuDashboard');

    onglets.forEach((onglet) => {
      onglet.addEventListener('click', () => {
        if (onglet.classList.contains('active')) {
          return;
        } else {
          onglets.forEach((item) => item.classList.remove('active'));
          onglet.classList.add('active');
        }

        const dataAnim = onglet.getAttribute('data-anim');
        for (let iDataAnim = 0; iDataAnim < contenu.length; iDataAnim++) {
          if (onglets[iDataAnim].getAttribute('data-anim') != dataAnim) {
            contenu[iDataAnim].classList.remove('activeContenu');
          }
        }
        for (let iContenu = 0; iContenu < contenu.length; iContenu++) {
          if (contenu[iContenu].getAttribute('data-anim') == dataAnim) {
            contenu[iContenu].classList.add('activeContenu');
          } else {
            contenu[iContenu].classList.remove('activeContenu');
          }
        }
      });
    });
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu); // Inverse l'état à chaque clic
  };

  return (
    <div className={`dashboardContainer ${toggleMenu ? 'menu-open' : ''}`}>
      <div className="btn-onglets" onClick={handleToggleMenu}>
        <CiMenuBurger className="btn" />
      </div>
      <div className={`container-onglets ${toggleMenu ? 'toggleMenu' : ''}`}>
        <div className="onglet-top">
          <div className="onglets-img">
            <img src={imgUser} alt="user" />
            <p>Henry <br /> George</p>
          </div>
          <div className="onglets-menu ">
            <div className="onglet active" data-anim="1">
              <img src={IconDashboard} alt="dashboard icon" />
              <p>Dashboard</p>
            </div>
            <div className="onglet" data-anim="2">
              <img src={IconInvoices} alt="invoices icon" />
              <p>Invoices</p>
            </div>
            <div className="onglet" data-anim="3">
              <img src={IconCompanies} alt="companies icon" />
              <p>Companies</p>
            </div>
            <div className="onglet" data-anim="4">
              <img src={IconContacts} alt="contacts icon" />
              <p>Contacts</p>
            </div>
          </div>
        </div>
        <div className="onglets-logout">
          <img src={imgUser} alt="user picture" />
          <a href="/login">Logout</a>
        </div>
      </div>

      <div className="container-DashboardRight">
        <div className="dashboardTop">
          <div className="topCard">
            <h3>Dashboard</h3>
            <p>dashboard/</p>
          </div>
          <img src={ExempleImg} alt="example image" />
          <div className="topCard topuser">
            <h3>Welcome back Henry!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rerum repellat unde corporis magnam aperiam provident!</p>
          </div>
        </div>
        <div className="contenuDashboard activeContenu" data-anim="1">
          <div className="contenuRight">
            <div className="stats">
              <h3>Statistics</h3> <br />
              <div className="stat-bulls">
                <div className="stat">
                  <p>5</p>
                  <h3>Companies</h3>
                </div>
                <div className="stat">
                  <p>5</p>
                  <h3>Invoices</h3>
                </div>
                <div className="stat">
                  <p>5</p>
                  <h3>Contacts</h3>
                </div>
              </div>
            </div>
            <div className="Last-invoices">
              <h3> Last Invoices</h3>
              <table>
                <tr>
                  <th>Invoice Number</th>
                  <th>Date</th>
                  <th>Company</th>
                </tr>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>01/01/2021</td>
                    <td>Company 1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>01/01/2021</td>
                    <td>Company 2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>01/01/2021</td>
                    <td>Company 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="contenuLeft">
            <div className="last-contacts">
              <h3> Last Contacts</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Johnedoe@gmail.com</td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Johnedoe@gmail.com</td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Johnedoe@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="last-Companies">
              <h3> Last Companies</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <th>TVA</th>
                  <th>Country</th>
                </tr>
                <tbody>
                  <tr>
                    <td>Company 1</td>
                    <td>123456789</td>
                    <td>Belgium</td>
                  </tr>
                  <tr>
                    <td>Company 1</td>
                    <td>123456789</td>
                    <td>Belgium</td>
                  </tr>
                  <tr>
                    <td>Company 1</td>
                    <td>123456789</td>
                    <td>Belgium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="contenuDashboard" data-anim="2">
          <Invoice />
        </div>
        <div className="contenuDashboard" data-anim="3">
          <Company />
        </div>
        <div className="contenuDashboard" data-anim="4">
          <Contact />
        </div>
      </div>
    </div>
  );
}
