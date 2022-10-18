function NavBar() {

    return(
        <div className="NavBar">
            <h1>HotelsNOW</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#" className="book">Book Now</a></li>
            </ul>
            {/* Renderar ett h1-element och en lista med fem länkar. */}
        </div>
    )
}

export default NavBar;
// Exporterar komponenten som "NavBar".