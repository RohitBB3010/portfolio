import './App.css';
import Navbar from './components/navbar';
import Socials from './components/socials';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './home_page';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Connect from './connect_page';
import Footer from './footer';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="socials">
      </div>
      <div className="pages">
      <Navbar/>
      <HomePage/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Connect/>
      <Footer/>
      </div>
    </div>
    </Router>

  );
}

export default App;
