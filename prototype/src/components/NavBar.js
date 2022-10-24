import { Link } from 'react-router-dom';
// Importerar "Link" från "react-router-dom".

function NavBar() {
    return(
        <div className="NavBar">
            <nav>
                <ul className="navBarList">
                    <li className="navBarListItems"><Link to="/">Home</Link></li>
                    <li className="navBarListItems"><Link to="/about">About us</Link></li>
                </ul>
            </nav>
            <h1 className="navBarHeading">HotelsNOW</h1>
        </div>
    )// Renderar ett h1-element och två Link-komponenter från React Router. Med hjälp av attributet "to" tar Link-komponenterna användaren till olika sidor.
}

export default NavBar;
// Exporterar komponenten som "NavBar".
