import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="navbar_list">
                <li className="navbar_items"> <a href = "#!"> Home </a> </li>
                <li className="navbar_items"> <a href = "#!"> Skills </a> </li>
                <li className="navbar_items" id="navbar_heading"> <a href = "#!"> Portfolio </a> </li>
                <li className="navbar_items"> <a href = "#!"> Experience </a> </li>
                <li className="navbar_items"> <a href = "#!"> Contact </a> </li>
            </ul>
        </div>
    );
    
}

export default Navbar;
