import React from 'react'
import '../App.css'
import Profilepic from './Images/Profilepic.png'
import Mailicon from './Images/Mail-icon.png'
import Lkicon from './Images/lk-icon.png'

export default function Info() {
   return (
    <div className='info-container'>
        <img className='profilepic' src={Profilepic}/>
        <div className='data-container'>
            <h1><span>LORENA</span> <br></br>GARCÍA CARDONA</h1>
            <hr></hr>
            <h3>FRONTEND DEVELOPER</h3>
            <h4>📍 Miami, FL</h4>
            <h4>📧 Lgarciac24@gmail.com</h4>
        </div>
        <div className='buttons'>
            <a href="mailto: Lgarciac24@gmail.com" target="_blank"><button className='email-button'> <img className="mailicon" src={Mailicon}/> Email</button></a>
            <a href="https://www.linkedin.com/in/lorena724/" target="_blank"><button className='linkedin-button'> <img className="lklicon" src={Lkicon}/>LinkedIn</button></a>
        </div>
    </div>  
   )
}
