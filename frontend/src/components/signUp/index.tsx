import { Link } from 'react-router-dom';
import imgPng from '../../assets/management.png';
import Header from '../Header';
import { useState } from 'react';
import {Signup} from '../AuthServices'
import {UserDataSingnup} from '../Interface'

export default function Index() {
  const data = {
    LastName: '',
    FirstName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };

  const [signUp, setSignUp] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== null) {
      setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }
  };

  const btn = signUp.LastName === '' || signUp.FirstName === '' || signUp.Email === '' || signUp.Password === '' || signUp.Password !== signUp.ConfirmPassword;

  const handleSubmit = (signUp: UserDataSingnup) => {
    try{
       const dataSinup =  Signup(signUp)
       console.log(dataSinup)
    }catch(error){
        console.log("Erreur lors de l'inscription",error)
    }
  }

  return (
    <>
      <Header />
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
                  <input onChange={handleChange} type="text" name="LastName" required />
                  <label htmlFor="LastName">Last Name</label>
                </div>
                <div className="inputBox">
                  <input onChange={handleChange} type="text" name="FirstName" required />
                  <label htmlFor="FirstName">First Name</label>
                </div>
                <div className="inputBox">
                  <input onChange={handleChange} type="email" name="Email" required />
                  <label htmlFor="Email">Email</label>
                </div>
                <div className="inputBox">
                  <input onChange={handleChange} type="password" name="Password" required />
                  <label htmlFor="Password">Password</label>
                </div>
                <div className="inputBox">
                  <input onChange={handleChange} type="password" name="ConfirmPassword" required />
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                </div>
                <input type="submit" value="Sign Up" className="button" disabled={btn}
                onClick={(e) => { e.preventDefault(); handleSubmit(signUp); }}
                 />
              </form>
              <div className="linkContainer">
                <Link to="/login">Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
