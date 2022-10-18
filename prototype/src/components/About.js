import Footer from "./Footer";
// Importerar komponenten "Footer".

function About() {

    return (
        <div className="About">
            <h1>About us</h1>
            <p>We are HotelsNOW, the perfect website when you want to go somewhere and need somewhere to live.</p>

            <p>HotelsNOW finds the best hotel for you. We are here for you. Always.</p>

            <Footer/>
        </div>
        // Renderar en div med ett h1-element, en paragraf och en Footer-komponent.
    )
}

export default About;
// Exporterar komponenten som "About".