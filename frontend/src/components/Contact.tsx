import "../styles/components/_contact.scss";
import "../styles/components/_info.scss";
import avatar from '../assets/avatar.png';
import hand from '../assets/hand.png';

const Contact =()=>{
    return(
        <div className="contact">
            <h1>Contact people</h1>
            <div className="people">
                <div className="person">
                    <div className="avatar" >
                        <img src={avatar} alt="photo" />
                    </div>
                    <h2>Bertram Gilfoyle </h2>
                </div>
                <div className="person">
                    <div className="avatar" >
                        <img src={avatar} alt="" />
                    </div>
                    <h2>Someone Else</h2>
                </div>
            </div>
        <img className='hand'src={hand} alt="" />
        </div>
  
    )
}
export default Contact;