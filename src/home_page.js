import { useEffect, useState } from 'react';
import './home_page.css';

const HomePage = () => {

    const roles = ['Full Stack', 'Mobile App'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setRoleIndex(roleIndex === 0 ? 1 : 0);
        }, 2000);

        return() => {
            clearInterval(interval);
        }
    }, );

    return(
        <div className="home_page">
            <div className="name">
                Hello!!! I'm Rohit Bharat Bhandwalkar
            </div>
            <div className="profession">
                <div id = "first_text"> I'm A &#60;</div>
                <div id = "second_text">Developer</div>
                <div id = "third_text">/&#62;</div>
            </div>
            <div className="role_animation">
                <div id="role">{roles[roleIndex]} </div>
                <div id="developer">Developer </div>
            </div>
        </div>
    );
}

export default HomePage;