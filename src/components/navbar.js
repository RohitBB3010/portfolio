import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="navbar_list">
                <li className="navbar_items"> Home </li>
                <li className="navbar_items"> Skills </li>
                <li className="navbar_items" id="navbar_heading"> Portfolio</li>
                <li className="navbar_items"> Experience </li>
                <li className="navbar_items"> Contact </li>
            </ul>
        </div>
    );
    
}

export default Navbar;
