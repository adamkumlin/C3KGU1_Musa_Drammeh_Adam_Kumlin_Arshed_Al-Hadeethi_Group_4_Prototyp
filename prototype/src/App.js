// Musa Drammeh, Adam Kumlin och Arshed-Al Hadeethi

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
// Importerar "Routes" och "Route" från "react-router-dom". Importerar också komponenterna "NavBar", "Home" och "About".

function App() {
// Skapar komponenten "App". Detta är rotkomponenten för hela applikationen.

    return (
        <div className="App">
            <NavBar/>
            {/* Renderar en NavBar-komponent. */}

            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
        // Renderar en Routes-komponent som innehåller två Route-komponenter. Den första Route-komponenten renderar Home-komponenten. 
        // Den andra Route-komponenten renderar About-komponenten med path-attributet som är lika med "about". Routes-komponenten används för att förvara Route-komponenterna.
  );
}

export default App;
// Exporterar komponenten som "App".
