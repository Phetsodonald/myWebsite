import {Link} from "react-router-dom"

 function Header(){
    return(
        <>
            <header>
                <h1>Phetso.</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/stack">Stack</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>                              
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header