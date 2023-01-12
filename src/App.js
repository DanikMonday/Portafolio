import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <section>
        <Home></Home>
      </section>
    </div>
  );
}

export default App;
