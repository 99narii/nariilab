import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Main from './screen/main';
import Header from './Component/Header';
import About from './screen/about';
import Portfolio from './screen/Portfolio';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
      <Route path="/" element = { <Main />} />
      <Route path="/about" element = { <About />} />
      <Route path="/portfolio" element = { <Portfolio />} />

      </Routes>


    </div>
    </Router>

  );
}

export default App;
