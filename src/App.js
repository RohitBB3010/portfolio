import './App.css';
import Navbar from './components/navbar';
import Socials from './components/socials';
import HomePage from './home_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './skills';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="socials">
        <Socials></Socials>
      </div>
      <div className="pages">
      <Navbar> </Navbar>
      <Routes>
        <Route exact path = "/" element= {<HomePage/>}/>
        <Route exact path = "/skills" element= {<Skills/>}/>
      </Routes>
      </div>
    </div>
    </Router>

  );
}

export default App;
