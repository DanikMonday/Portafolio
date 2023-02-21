import React from 'react';
import {FaGraduationCap} from "react-icons/fa";

export const Experience = (props) => {
  return (
    <div className='experience'>
        <div className='sec-exp'>
            <h2>{props.tit1}</h2>
            <h2>{props.tit2}</h2>
        </div>
        <h3 className='empresa'>{props.empresa}</h3>
        <h4 className='ano-exp'>{props.ano}</h4>
        <div className='cuerpo-exp'>
            <p><strong>{props.cargo}</strong></p>
        </div>  
        <div className='cuerpo-exp'>
            <p>{props.cuerpo}</p>
        </div>  
        
       
    </div>
  )
}
