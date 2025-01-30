import { Link } from 'react-router-dom'
import imgPng from '../../assets/management.png'

export default function index() {
  return (
       <div className="signUpContenaire">
            <div className="containerForm">
                <div className="formBoxLeft">
                    <img src={imgPng} alt="logo" />
                </div>
                <div className="formBoxRight">
                    <h1>Sign Up</h1>
                 <div className="formContent">
                    <form action="/home" method="post">
                        <div className="inputBox">
                            <input type="text" name="LastName" required />
                            <label htmlFor="LastName">Last Name</label> 
                        </div>
                        <div className="inputBox">
                            <input type="text" name="FirstName" required />
                            <label htmlFor="FirstName">First Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="name" required />
                            <label htmlFor="name">Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="name" required />
                            <label htmlFor="name">Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="name" required />
                            <label htmlFor="name">Confirm Password</label>
                        </div>
                        <input type="submit" value="Sign up" className='button'/>
                    </form>
                    <div className="linkContainer">
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
