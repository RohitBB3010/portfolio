import { Routes, useLocation } from 'react-router-dom';
import HomePage from '../home_page';
import Skills from '../skills';
import Experience from '../experience';
import Education from '../education';
import Projects from '../projects';
import Connect from '../connect_page';

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
        <div>
            <div id = "/"> <HomePage/> </div>
            <div id = "/skills"> <Skills /> </div>
            <div id = "/experience"> <Experience/> </div>
            <div id = "/education"> <Education/> </div>
            <div id = "/projects"> <Projects/> </div>
            <div id = "/connect"> <Connect/> </div>
        </div>
    );
}

export default AnimatedRoutes;