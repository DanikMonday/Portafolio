import React from 'react'

export const EducationItem = (props) => {
  return (
        <div className='experience'>
            <h3 className='institucion'>{props.empresa}</h3> 
            <h4 className='ano-edu'>{props.ano}</h4>
            <div className='cuerpo-edu'>
                <p>{props.cuerpo}</p>
            </div>  
        </div>
  )
}
