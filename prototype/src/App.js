import './App.css';
// Importerar CSS.

import { useState } from "react";

import NavBar from "./components/NavBar.js";
// Importerar komponenten "NavBar".

import SearchFilter from "./components/SearchFilter";
// Importerar komponenten "SearchFilter".

import InformationCard from "./components/InformationCard.js";
// Importerar komponenten "InformationCard".

import hotelpool from "./images/hotel_pool.jpg";
// Importerar två bilder.

//import hotels from "./hotels.json";

const hotels = [
  {"hotelName": "Hotel Jones", "destination": "New York City", "description": "Cheap and near the sea.", "image":".png", "price":"199"},
  {"hotelName": "Abby's Hotel", "destination": "Paris", "description": "Luxorious with delicious food and drink.", "image":".png", "price":"599"},
  {"hotelName": "The Cozy Stay", "destination": "London", "description": "We are located in the centre of beautiful London.", "image":".png", "price":"399"},
  {"hotelName": "SimpleHotels", "destination": "Manchester", "description": "Very cheap, we are nice to your wallet.", "image":".png", "price":"99"},
  {"hotelName": "The Perfect Palace", "destination": "Los Angeles", "description": "An unforgettable experience, we are the nicest hotel around.", "image":".png", "price":"999"},
];

function App() {

  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(0);

  function searchHotels() {

    const filteredHotels = [];

    hotels.filter(function(results) {
              
      if (destination === "" || checkInDate === "" || checkOutDate === "" || guests === "") {

        return null;

      } else if (results.destination.toLowerCase().includes(destination.toLowerCase())) {

       return results;

      }})}

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

      <SearchFilter destination={destination} changeDestination={(e) => setDestination(e.target.value)} checkInDate={checkInDate} changeCheckInDate={(e) => setCheckInDate(e.target.value)}
                checkOutDate={checkOutDate} changeCheckOutDate={(e) => setCheckOutDate(e.target.value)}
                guests={guests} changeGuests={(e) => setGuests(e.target.value)} searchHotels={searchHotels}/>

      {hotels.filter(function(results) {
              
              if (destination === "" || checkInDate === "" || checkOutDate === "" || guests === "") {
        
                return null;
        
              } else if (results.destination.toLowerCase().includes(destination.toLowerCase())) {
        
               return results;
        
              }}).map(({hotelName, destination, description, image, price}) => (

              <InformationCard hotelName={hotelName} destination={destination} description={description} image={image} price={price}/>
              
            ))}
      
    </div>
  );
}

export default App;