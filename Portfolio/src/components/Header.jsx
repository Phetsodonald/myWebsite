import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css"

function activeRoute(route){
    const location = useLocation();

    return location.pathname === route ? `${styles.active}` : "";
}

 function Header(){
    return(
        <>
            <header>
                <h1>Phetso.</h1>
                <nav>
                    <ul>
                        <li><Link to="/" className={activeRoute("/")}>Home</Link></li>
                        <li><Link to="/about" className={activeRoute("/about")}>About</Link></li>
                        <li><Link to="/stack" className={activeRoute("/stack")}>Stack</Link></li>
                        <li><Link to="/projects" className={activeRoute("/projects")}>Projects</Link></li>
                        <li><Link to="/Contact" className={activeRoute("/Contact")}>Contact</Link></li>                              
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header