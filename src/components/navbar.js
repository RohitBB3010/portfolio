import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar_left">
                &#123; R &#125;
            </div>
            <div className="navbar_list">                
                <Link to = "/" className="navbar_items"> Home </Link>
                <Link to = "/skills" className="navbar_items"> Skills </Link>
                <Link className="navbar_items" id = "navbar_heading"> Portfolio </Link>
                <Link to = "/experience" className="navbar_items"> Experience </Link>
                <Link to = "/contact" className="navbar_items"> Contact </Link>
            </div>
        </div>
    );
    
}

export default Navbar;
