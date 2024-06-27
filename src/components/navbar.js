import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <ul className="navbar_list">
                <li> <a className="navbar_items" href = "#!"> Home </a> </li>
                <li> <a className="navbar_items"  href = "#!"> Skills </a> </li>
                <li > <a className="navbar_items" href = "#!" id="navbar_heading"> Portfolio </a> </li>
                <li> <a className="navbar_items" href = "#!"> Experience </a> </li>
                <li> <a className="navbar_items"  href = "#!"> Contact </a> </li>
            </ul>
        </div>
    );
    
}

export default Navbar;
