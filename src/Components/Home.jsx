import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";



export const Home = () => {
  return (
    <div className='home'>
       <div className='profile-img' ><img src={ require('../Images/profile.png')} alt='profile img'></img></div>
       <div className='name'>DANIELA ACOSTA F.</div>
       <div className='networks'>
            <div className='ico-net'><a href='https://www.linkedin.com/in/daniela-acosta-f/'><BsLinkedin className='ico-net ico-link'></BsLinkedin></a></div>
            <div className='ico-net'><a href='https://github.com/DanikMonday'><BsGithub className='ico-net ico-git'></BsGithub></a></div>
            <div className='ico-net'><a href='daacostaf@unal.edu.co'><SiGmail className='ico-net ico-mail'></SiGmail></a></div>
       </div>
       {/* <button className='btn-hire'>Hire me !</button> */}
    </div>
  )
}
