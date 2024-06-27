import './socials.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Socials = () => {

    return(
        <div className="socials">
            <div className="vertical_line1"> </div>
        <a href = "https://github.com/RohitBB3010" target="_blank">
            < FaGithub className="icons"> </FaGithub>
        </a>
        <a href = "https://www.linkedin.com/in/rohit-bhandwalkar/" target="_blank">
            < FaLinkedin className="icons"> </FaLinkedin>
        </a>
        <div className="vertical_line2"> </div>
        </div>
    );
}

export default Socials;