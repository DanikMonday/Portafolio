import React from 'react'

export const ExperienceItem = (props) => {
  return (
        <div className='experience'>
            
            <h3 className='empresa'>{props.empresa}</h3>
            <h4 className='ano-exp'>{props.ano}</h4>
            <div className='cargo-exp'>
                <p><strong>{props.cargo}</strong></p>
            </div>  
            <div className='cuerpo-exp'>
                <p>{props.cuerpo}</p>
            </div>  
        </div>
  )
}
