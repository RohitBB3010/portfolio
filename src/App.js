import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/routes';
import Footer from './footer';

function App() {

  return (
    <Router>
      <div className="App">
      <div className="socials">
      </div>
      <div className="pages">
      <Navbar/>
        <AnimatedRoutes/>
      <Footer/>
      </div>
    </div>
    </Router>

  );
}

export default App;
