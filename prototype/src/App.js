import './App.css';
import brown_bridge from "./images/brown_bridge.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HotelsNOW</h1>
        <a href="#">About us</a>
        <a href="#">Language</a>
        <a href="#">Contact us</a>
        <a href="#">Sign up</a>
        <a href="#">Log in</a>
        <img src={brown_bridge} alt="Rectangle-1"/>
        <input type="text" placeholder="Destination"/>
        <input type="text" placeholder="Date"/>
        <input type="text" placeholder="Guests"/>
        <input type="text" placeholder="Search"/>
      </header>
    </div>
  );
}

export default App;