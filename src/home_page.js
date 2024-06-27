import { useEffect, useState } from 'react';
import './home_page.css';

const HomePage = () => {

    const roles = ['Full Stack Developer', 'Mobile App Developer', 'Software Engineer'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setRoleIndex(roleIndex === 2 ? 0 : roleIndex+1);
        }, 1000);

        return() => {
            clearInterval(interval);
        }
    }, );

    return(
        <div className="home_page">
            <div className="left">
            <div className="name">
                Hello!!! I'm Rohit Bharat Bhandwalkar
            </div>
            <div className="profession">
                <div id = "first_text"> I'm A &#60;</div>
                <div id = "second_text">Developer</div>
                <div id = "third_text">/&#62;</div>
            </div>
            <div className="role">
                {roles[roleIndex]}
            </div>
            <div className="info"> 
            Welcome to my developer portfolio! Dive into a world of innovative projects, cutting-edge skills, and a passion for creating exceptional digital experiences.
            </div>
            </div>
          
                <img src="/ellipse.png" alt = ""/>
            
        </div>
    );
}

export default HomePage;