import './App.css';
// Importerar CSS.

import NavBar from "./components/NavBar.js";
// Importerar komponenten "NavBar".

import hotelpool from "./images/hotel_pool.jpg";
import calendaricon from "./images/calendar_icon.png";
// Importerar två bilder.

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <div className="Intro">
        <img src={hotelpool}/>
        <div className="IntroContent">
          <p>Your home away from home</p>
          <p className="IntroSlogan">Where Comfort and Affordability meet</p>
          <a href="#" className="IntroButton">Explore now</a>
        </div>
      </div>

      <div className="Search">
        <img src={calendaricon}/>
        <label>Destination<br></br> <input type="text"></input></label>
        <label>Check in<br></br> <input type="date"></input></label>
        <label>Check out<br></br> <input type="date"></input></label>
        <label>Guests<br></br> <input type="number"></input></label>
        <label>Check availability<br></br> <input type="submit"></input></label>
      </div>
    </div>
  );
}

export default App;