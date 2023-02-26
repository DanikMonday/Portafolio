import React from 'react';
import {AiFillHtml5} from "react-icons/ai";
import { SiCss3 } from "react-icons/si"; 
import { SiJavascript} from "react-icons/si";
import { GrReactjs} from "react-icons/gr";
import { FiFigma } from "react-icons/fi";




export const About = (props) => {
  return (
    <div>
        <div className='about'>
            <h2>About me</h2>
            <p>{props.resume}</p>
            <button className='btn-cv'><a href={require('../Docs/cvd-Daniela Acosta Forero..pdf')} target="_blank">Download CV</a></button>
        </div>
        <div className='ico-skills'>
            <div className='cont-ico'><AiFillHtml5 className='ico-sk ico-html'></AiFillHtml5></div>
            <div className='cont-ico'><SiCss3 className='ico-sk ico-css'></SiCss3></div>
            <div className='cont-ico'><SiJavascript className='ico-sk ico-js'></SiJavascript></div>
            <div className='cont-ico'><GrReactjs className='ico-sk ico-react'></GrReactjs></div>
            <div className='cont-ico'><FiFigma className='ico-sk ico-fig'></FiFigma></div>
        </div>
        <div className='background'>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          <div className='background-logo'></div>
          
       </div>
        
    </div>
  )
}
