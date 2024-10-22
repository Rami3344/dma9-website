import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import About from './components/Main/About';
import Suggest from './components/Main/Suggest';

function App() {
  return (
    <div className="App">
      <nav>
      <NavBar/>
      </nav>
      <main>
        <About/>
        <Suggest/>
      </main>
    </div>
  );
}

export default App;
