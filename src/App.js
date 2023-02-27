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
        <About 
        resume = "Through learning based on project development and SCRUM methodology, I have made
        several web applications with real clients oriented both to FRONTEND and BACKEND.
        Leadership to motivate and organize work teams, resilience to face difficulties of jobs that are
        under pressure and assertive communication have been essential for the negotiation processes
        with the different internal, external clients and teammates." /> 
       
        <Experience></Experience>
      </section>
    </div>
  );
}

export default App;
