import React from 'react'

export default function Nav() {
  return (
    <div className="head">
        <nav>
            <h1>COGIP</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/invoices">Invoices</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
        <div className="connectSection">
                <a href="/signup">Sign up</a>
                <a href="/login">Login</a>
        </div>
    </div>
  )
}
