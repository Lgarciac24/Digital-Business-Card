import React from 'react'
import '../App.css'
import Profilepic from './Images/Profilepic.jpg'
import Mailicon from './Images/Mail-icon.png'
import Lkicon from './Images/lk-icon.png'

export default function Info() {
   return (
    <div className='info-container'>
        <img className='profilepic' src={Profilepic}/>
        <div className='data-container'>
            <h1>Lorena García Cardona</h1>
            <h3>Fontend Developer</h3>
            <h4>📍 Planet Earth</h4>
            <h4>📧 Lgarciac24@gmail.com</h4>
        </div>
        <div className='buttons'>
            <a href="mailto: Lgarciac24@gmail.com" target="_blank"><button className='email-button'> <img className="mailicon" src={Mailicon}/> Email</button></a>
            <a href="https://www.linkedin.com/in/lorena724/" target="_blank"><button className='linkedin-button'> <img className="lklicon" src={Lkicon}/>LinkedIn</button></a>
        </div>
    </div>  
   )
}
