import React from 'react'

export const WorkItem = (props) => {
  return (
    
        
        <div className='a-work'  style={{ 
          backgroundImage: `url("${props.fondo}")` 
        }}>
        <a href={props.deploy} target="blank" ><h2>{props.titulo}</h2></a>
        </div>
    
  )
}
