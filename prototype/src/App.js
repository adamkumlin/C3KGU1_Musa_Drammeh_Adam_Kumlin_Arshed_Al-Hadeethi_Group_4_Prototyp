import './App.css';
import brown_bridge from "./images/brown_bridge.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Destination" />
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Guests" />
        <input type="text" placeholder="Search" />
        <img src={brown_bridge} alt="Rectangle-1"/>
      </header>
    </div>
  );
}

export default App;
