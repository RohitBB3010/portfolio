import './navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {

    return (
        <div className="navbar" style={{position : "fixed"}}>
            <div className="navbar_left">
                &#123; R &#125;
            </div>
            <div className="navbar_list">                
                <Link to = "/" spy={true} smooth={true} offset={-150} duration={500} className="navbar_items"> Home </Link>
                <Link to = "/skills" spy={true} smooth={true} offset={-100} duration={500} className="navbar_items"> Skills </Link>
                <Link to = "/experience" spy={true} smooth={true} offset={-100} duration={500} className="navbar_items"> Experience </Link>
                <Link to = "/projects" spy={true} smooth={true} offset={-100} duration={500} className="navbar_items"> Projects </Link>
                <Link to = "/connect" spy={true} smooth={true} offset={-100} duration={500} className="navbar_items"> Connect </Link>
            </div>
        </div>
    );
    
}

export default Navbar;
