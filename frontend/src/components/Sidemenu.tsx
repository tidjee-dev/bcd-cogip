import "../styles/components/_contact.scss";
import "../styles/components/_info.scss";
import "../styles/components/_sidemenu.scss";
import avatar from '../assets/avatar.png';
import companies from '../assets/Icon_Companies.png';
import invoices from '../assets/Icon_Invoices.png';
import contact from '../assets/Icon_contact.png';
import dashboard from '../assets/Icon_dashboard.png';


const Sidemenu=()=>{
    return(
        <div className="sidemenu">
            <div className="person">
                    <div className="avatar" >
                        <img src={avatar} alt="photo" />
                    </div>
                    <h2>Bertram Gilfoyle </h2>
            </div>

            <div className="menu">
                <nav>
                    <ul className="nav-links">
                        <li><a href=""> <img src={dashboard} alt="" />Dashboard</a> </li> 
                        <li><a href=""> <img src={invoices} alt="" />Invoices</a> </li> 
                        <li><a href=""> <img src={companies} alt="" />Companies</a> </li> 
                        <li><a href=""> <img src={contact} alt="" />Contact</a> </li> 
                    </ul>
                </nav>
            </div>
            <div className="logout">
                <div className="person">
                        <div className="avatar" >
                            <img src={avatar} alt="photo" />
                        </div>
                </div>
                    <a href="">Logout</a>  
            </div>
        </div>
    )
}

export default Sidemenu;