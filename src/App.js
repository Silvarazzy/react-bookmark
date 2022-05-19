import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Grid from './grid'
import Section3 from './Section3';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Grid/>
      <Section3/>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
