import React, {useState} from 'react';
import { EducationItem } from './EducationItem';
import { ExperienceItem } from './ExperienceItem';

export const Experience = (props) => {

    const [type, setType] = useState(1);

    const handleXp = () => {
        setType(1);
    }

    const handleEdu = () => {
        setType(2);
    }
    
  return (
   
    <div className='exp-edu-section'>
        
        {type === 1? (<> 
        <div>
            <div className='sec-exp'>
                <button className='btn-xp' onClick={handleXp}><p>Experience</p></button>
                <button className='btn-xp' onClick={handleEdu}><p>Education</p></button>
            </div>
            <ExperienceItem  
            empresa = "Simplon.co"
            cuerpo = "Web development using HTML, CSS, JavaScript and React JS."
            ano = "September 2022- Present"></ExperienceItem>
                <ExperienceItem
            empresa = "Fundación EDUCAMAS"
            cargo ="Volunteering"
            cuerpo = "Mentoring and supporting the development of activities to improve the command of my classmate’s English skills"
            ano = "September 2022 – February 2023"
            ></ExperienceItem>
            <ExperienceItem
            empresa = "Alimentos Polar S.A.S."
            cargo ="Project Engineering"
            cuerpo = "Preparation, review and validation of engineering documents (assembly and, manufacturing plans, process diagrams and P&ID, calculation of equipment) Supervision of electromechanical assemblies."
            ano = "June 2021- December 2021"
            ></ExperienceItem>
            <ExperienceItem
            empresa = "Videogames Platform"
            cargo ="Customer service"
            cuerpo = "Customer service and administration of a digital entertainment service center. Technical support for the operation of the equipment."
            ano = "February 2013 - October 2015"
            ></ExperienceItem> 
        </div></>) : (<>  
        <div className='sec-exp'>
            <button className='btn-xp' onClick={handleXp}><p>Experience</p></button>
            <button className='btn-xp' onClick={handleEdu}><p>Education</p></button>
        </div>
        <EducationItem    
            empresa = "Fundación EDUCAMAS"
            cuerpo = "Full Stack Web Developer"
            ano = "2022 - 2023" ></EducationItem>
        <EducationItem    
            empresa = "Centro Colombo Americano"
            cuerpo = "B2 English level – CEFRL"
            ano = "2022" ></EducationItem>
        <EducationItem    
            empresa = "Universidad Nacional de Colombia"
            cuerpo = "Bachelor Degree of Mechanical Engineering"
            ano = "2014 - 2021" ></EducationItem>
        <EducationItem    
            empresa = "Universidad Tecnológica de Pereira - Misión TIC"
            cuerpo = "Programming Fundamentals"
            ano = "2020" ></EducationItem>
            </>)}
       
    </div>
  )
}
