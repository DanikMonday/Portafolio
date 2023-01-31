import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <section>
        <Home></Home>
        <About></About>
      </section>
    </div>
  );
}

export default App;
