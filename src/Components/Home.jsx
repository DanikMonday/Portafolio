import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

export const Home = () => {
  return (
    <div className='home'>
       <div className='profile-img' ><img src={ require('../Images/profile.png')}></img></div>
       <div className='name'>DANIELA ACOSTA F.</div>
       <div className='networks'>
            <div className='ico-net'><BsLinkedin className='ico-net ico-link'></BsLinkedin></div>
            <div className='ico-net'><BsGithub className='ico-net ico-git'></BsGithub></div>
            <div className='ico-net'><SiGmail className='ico-net ico-mail'></SiGmail></div>
       </div>
       <button className='btn-hire'>Hire me !</button>
    </div>
  )
}
