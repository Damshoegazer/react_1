import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar(props) {
return (
    <nav className="nav-menu">
    <Link to="/">
        <h3>GAMING STORE</h3>
    </Link>

    <Link to="/category/Placa de video">Placa de video</Link>
    <Link to="/category/Monitor">Monitor</Link>
    <Link to="/category/Mouse">Mouse</Link>
    <CartWidget />
    </nav>
);
}

export default NavBar;