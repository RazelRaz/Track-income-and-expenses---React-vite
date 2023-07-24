import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import './'

const Menu = () => {
    return (
        <div className="menu_area">
            <div className="logo_area">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/income">Income</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
            </ul>
        </div>
    );
};

export default Menu;