import { Link } from 'react-router-dom';
import "../header/header.css";

const NavItem = (props) => {
    return (
        <li className="nav-item"><Link className='nav-item-link' to={props.to}>{props.section}</Link></li>
    )
}

export { NavItem }