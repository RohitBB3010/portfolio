import './App.css';
import Navbar from './components/navbar';
import Socials from './components/socials';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './home_page';
import Skills from './skills';
import Experience from './experience';
import Education from './education';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="socials">
        {/* <Socials></Socials> */}
      </div>
      <div className="pages">
      <Navbar/>
      <HomePage/>
      <Skills/>
      <Experience/>
      <Education/>
      </div>
    </div>
    </Router>

  );
}

export default App;
