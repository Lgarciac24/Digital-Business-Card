import React from 'react'
import '../App.css'
// import Twitter from './Images/Twitter-Icon.png'
// import Facebook from './Images/Facebook-Icon.png'
import Instagram from './Images/Instagram-Icon.png'
import Github from './Images/Github-Icon.png'


export default function Footer() {
    return (
        <div className='footer-container'>
           
            {/* <a href="www.twitter.com"><button className="social-buttons"><img className='social' src={Twitter}/></button></a>
            <a href="www.facebook.com"><button className="social-buttons"><img className='social' src={Facebook}/></button></a> */}
            <a href="https://instagram.com/lore0724" target="_blank"><button className="social-buttons"><img className='social' src={Instagram}/></button></a>
            <a href="https://github.com/Lgarciac24" target="_blank"><button className="social-buttons"><img className='social' src={Github}/></button></a>
        </div>
        
    )
}