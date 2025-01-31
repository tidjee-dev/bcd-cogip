import { Link } from 'react-router-dom'
import imgPng from '../../assets/management.png'
import Header from '../Header'
import { useState } from 'react'

export default function Index() {
    const data = {
        LastName: '',
        FirstName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }

    const [signUp, setSignUp] = useState(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target !== null) {
            setSignUp({...signUp, [e.target.name]: e.target.value})
        }
    }

    const {LastName, FirstName, Email, Password, ConfirmPassword} = signUp

    const btn = LastName === '' || FirstName === '' || Email === '' || Password === '' || Password === ConfirmPassword ? true : false     
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
                    {btn !==true ? <p className="error">Please fill in all fields correctly</p> : null}
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
                            <input onChange={handleChange} type="text" name="name" required />
                            <label htmlFor="name">Email</label>
                        </div>
                        <div className="inputBox">
                            <input onChange={handleChange} type="password" name="name" required />
                            <label htmlFor="name">Password</label>
                        </div>
                        <div className="inputBox">
                            <input onChange={handleChange} type="password" name="name" required />
                            <label htmlFor="name">Confirm Password</label>
                        </div>
                        <input type="submit" value="Sign Up" className="button" disabled={btn} />
                    </form>
                    <div className="linkContainer">
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
