import React from 'react';
import {AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si"; 
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs} from "react-icons/gr";
import { FiFigma } from "react-icons/fi";



export const About = (props) => {
  return (
    <div>
        <div className='about'>
            <h2>About me</h2>
            <p>{props.resume}</p>
            <button className='btn-cv'><a href={require('../Docs/cvd-DanielaAcostaForero.pdf')} target="_blank">Download CV</a></button>
        </div>
        <div className='ico-skills'>
            <div className='cont-ico'><AiOutlineHtml5 className='ico-sk'></AiOutlineHtml5></div>
            <div className='cont-ico'><SiCss3 className='ico-sk'></SiCss3></div>
            <div className='cont-ico'><TbBrandJavascript className='ico-sk'></TbBrandJavascript></div>
            <div className='cont-ico'><GrReactjs className='ico-sk'></GrReactjs></div>
            <div className='cont-ico'><FiFigma className='ico-sk'></FiFigma></div>
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
