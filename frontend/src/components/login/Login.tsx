import SvgWave from '../../assets/wave.svg'
import Header from '../Header'
import { useState } from 'react'

export default function Login() {
    const data = {
        Email: '',
        Password: ''
    }
    const [login, setLogin] = useState(data)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target !== null) {
            setLogin({...login, [e.target.name]: e.target.value})
        }
    }
    const btn = login.Email === '' || login.Password === '' ? true : false
  return (
    <>
        <Header />
        <div className="loginContainer">
        <img src={SvgWave} alt="" />
        <h1>Login</h1>
        <div className="formContent">
            <form action="/home" method="post">
                <div className="inputBox">
                    <input onChange={handleChange} type="text" name="Email" required />
                    <label htmlFor="Email">Email</label>
                </div>
                <div className="inputBox">
                    <input onChange={handleChange} type="password" name="password" required />
                    <label htmlFor="password">Password</label>
                    </div>
                <input type="submit" disabled={btn} value="login" className="button" />
            </form>
            <div className="linkContainer">
            <a href="/signup">Don't have an account?</a>
        </div>
        </div>
    </div>
    </>
  )
}
