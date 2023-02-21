import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Experience } from './Components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <section>
        <Home></Home>
        <About></About>
        <Experience
        tit1 = "Experience"
        tit2 = "Education"
        empresa = "Simplon.co"
        cuerpo = "Desarrollo de aplicaciones web con HTML, CSS, JavaScript y React JS."
        ano = "September 2022- Present"
        ></Experience>
        <Experience
        empresa = "Fundación EDUCAMAS"
        cargo ="Volunteering"
        cuerpo = "Mentoring and supporting the development of activities to improve the command of my classmate’s English skills"
        ano = "September 2022 – February 2023"
        ></Experience>
        <Experience
        empresa = "Alimentos Polar S.A.S."
        cargo ="Project Engineering"
        cuerpo = "Preparation, review and validation of engineering documents (assembly and, manufacturing plans, process diagrams and P&ID, calculation of equipment) Supervision of electromechanical assemblies."
        ano = "June 2021- December 2021"
        ></Experience>
        <Experience
        empresa = "Videogames Platform"
        cargo ="Customer service"
        cuerpo = "Customer service and administration of a digital entertainment service center. Technical support for the operation of the equipment."
        ano = "February 2013 - October 2015"
        ></Experience>

      
      </section>
    </div>
  );
}

export default App;
