import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Main from './screen/main';
import Header from './Component/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
      <Route path="/" element = { <Main />} />
      </Routes>


    </div>
    </Router>

  );
}

export default App;
