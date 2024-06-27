import './App.css';
import Navbar from './components/navbar';
import Socials from './components/socials';
import HomePage from './home_page';

function App() {
  return (
    <div className="App">
      <div className="socials">
        <Socials></Socials>
      </div>
      <div className="pages">
      <Navbar> </Navbar>
      <HomePage> </HomePage>
      </div>
    </div>
  );
}

export default App;
