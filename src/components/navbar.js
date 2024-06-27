import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="navbar_list">
                {/* <li> <a className="navbar_items" href = "#!"> Home </a> </li>
                <li> <a className="navbar_items"  href = "#skills"> Skills </a> </li>
                <li > <a className="navbar_items" href = "#!" id="navbar_heading"> Portfolio </a> </li>
                <li> <a className="navbar_items" href = "#!"> Experience </a> </li>
                <li> <a className="navbar_items"  href = "#!"> Contact </a> </li> */}
                <Link to = "/" className="navbar_items"> Home </Link>
                <Link to = "/skills" className="navbar_items"> Skills </Link>
                <Link className="navbar_items" id = "navbar_heading"> Portfolio </Link>
                <Link to = "/experience" className="navbar_items"> Experience </Link>
                <Link to = "/contact" className="navbar_items"> Contact </Link>
            </ul>
        </div>
    );
    
}

export default Navbar;
