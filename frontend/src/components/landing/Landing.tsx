
import Header from "../Header"
import LandingImg from '../../assets/0a9624a0-86cd-11ef-9898-0242ac140003.jpg'

export default function Landing() {
  return (
    <>
    <Header />
        
        <div className="landing">
            
            <div className="landingLeft">  
                <p> <span>COGIP</span>  is a company that offers a range of 
                services to help you manage your business. We offer services such as invoicing, accounting, and more. Sign up today to get started!</p>
                <div className="connection">
                    <a  href="/login" className="button btn">Login</a>
                    <a href="/signup" className="button">Sign Up</a>
                </div> 
            </div> 
            
                <img src={LandingImg} alt="office" />
           
        </div>
    </>
  )
}
