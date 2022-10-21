import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className="NavBar">
            <nav>
                <ul className="navBarList">
                    <li className="navBarListItems"><Link to="/">Home</Link></li>
                    <li className="navBarListItems"><Link to="/about">About us</Link></li>
                </ul>
                {/* Renderar ett h1-element och en lista med fem länkar. */}
            </nav>
            <h1 className="navBarHeading">HotelsNOW</h1>
        </div>
    )
}

export default NavBar;
// Exporterar komponenten som "NavBar".