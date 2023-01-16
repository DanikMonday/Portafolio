import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { AiFillFolder} from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { RiBook2Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <div className='head'>
        <div className='logo-cont'>
            <img className="logo" src={require("../Images/logo6.png")} alt="logo"></img>
        </div>
        <div className='nav'>
            
                <p><AiFillHome/> Home </p>
                <p><GoPerson/> About </p>
                <p><RiBook2Fill/> XP </p>
                <p><AiFillFolder/>Works</p>
                {/* <p><AiFillHome/>Contact</p> */}
            
        </div>
    </div>
  )
}
