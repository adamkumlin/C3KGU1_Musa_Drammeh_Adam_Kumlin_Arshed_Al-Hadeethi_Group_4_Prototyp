import './App.css';
// Importerar CSS.

import { useState } from "react";

import NavBar from "./components/NavBar.js";
// Importerar komponenten "NavBar".

import SearchFilter from "./components/SearchFilter";
// Importerar komponenten "SearchFilter".

import InformationCard from "./components/InformationCard.js";
// Importerar komponenten "InformationCard".

import DetailsBox from "./components/DetailsBox";
// Importerar komponenten "DetailsBox".

import hotelpool from "./images/hotel_pool.jpg";
// Importerar två bilder.

//import hotels from "./hotels.json";

const hotels = [
  {"id": "0", "hotelName": "Hotel Jones", "destination": "New York City", "description": "Cheap and near the sea.", "image":"../images/hotel.jpg", "price":"199"},
  {"id": "1", "hotelName": "Abby's Hotel", "destination": "Paris", "description": "Luxorious with delicious food and drink.", "image":"../images/hotel1.jpg", "price":"599"},
  {"id": "2", "hotelName": "The Cozy Stay", "destination": "London", "description": "We are located in the centre of beautiful London.", "image":"../images/hotel2.jpg", "price":"399"},
  {"id": "3", "hotelName": "SimpleHotels", "destination": "Manchester", "description": "Very cheap, we are nice to your wallet.", "image":"../images/hotel3.jpg", "price":"99"},
  {"id": "4", "hotelName": "The Perfect Palace", "destination": "Los Angeles", "description": "An unforgettable experience, we are the nicest hotel around.", "image":"../images/hotel4.jpg", "price":"999"},
];

function App() {

  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(0);
  const [chosenHotel, setChosenHotel] = useState(null);
  const [image, setImage] = useState("");

  function searchHotels() {

    const filteredHotels = [];

    hotels.filter(function(results) {
              
      if (destination === "" || checkInDate === "" || checkOutDate === "" || guests === "") {

        return null;

      } else if (results.destination.toLowerCase().includes(destination.toLowerCase())) {

       return results;

      }})}

  function chooseHotel(id) {

    setChosenHotel(hotels[id]);
  }

  function confirmBooking() {
  }

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

      <SearchFilter destination={destination} changeDestination={(e) => setDestination(e.target.value)} 
                checkInDate={checkInDate} changeCheckInDate={(e) => setCheckInDate(e.target.value)}
                checkOutDate={checkOutDate} changeCheckOutDate={(e) => setCheckOutDate(e.target.value)}
                guests={guests} changeGuests={(e) => setGuests(e.target.value)}/>

      {hotels.filter(function(results) {
              
              if (destination === "" || checkInDate === "" || checkOutDate === "" || guests === "") {
        
                return null;
        
              } else if (results.destination.toLowerCase().includes(destination.toLowerCase())) {
        
               return results;
        
              }}).map(({id, hotelName, destination, description, image, price}) => (

              <InformationCard id={id} hotelName={hotelName} destination={destination} description={description} image={image} price={price} chooseHotel={chooseHotel}/>
              
            ))}

      <DetailsBox chosenHotel={chosenHotel}/>
      
    </div>
  );
}

export default App;