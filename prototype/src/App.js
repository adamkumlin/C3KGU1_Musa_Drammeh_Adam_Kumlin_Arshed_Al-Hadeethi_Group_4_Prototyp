import './App.css';
// Importerar CSS.

import { useState } from "react";
// Importerar State.

import NavBar from "./components/NavBar.js";
// Importerar komponenten "NavBar".

import SearchFilter from "./components/SearchFilter";
// Importerar komponenten "SearchFilter".

import InformationCard from "./components/InformationCard.js";
// Importerar komponenten "InformationCard".

import CheckOutButton from "./components/CheckOutButton";

import DetailsBox from "./components/DetailsBox";
// Importerar komponenten "DetailsBox".

import ConfirmationMessage from "./components/ConfirmationMessage";
// Importerar komponenten "ConfirmationMessage".

import Footer from "./components/Footer";
// Importerar komponenten "Footer".

import hotelpool from "./images/hotel_pool.jpg";
// Importerar en bild.

//import hotels from "./hotels.json";

const hotels = [
  {"id": "0", "hotelName": "Hotel Jones", "destination": "New York City", "description": "Cheap and near the sea.", "facts": ["Cheap", "Free cancellation", "Free breakfast"], "image":"../assets/hotel.jpg", "price":"199", 
  "rooms": [{"guests": "1", "roomName": "Single room", "roomID": "0"}, {"guests": "2", "roomName": "Small apartment", "roomID": "1"}, {"guests": "3", "roomName": "Apartment", "roomID": "2"}]},

  {"id": "1", "hotelName": "Abby's Hotel", "destination": "Paris", "description": "Luxorious with delicious food and drink.", "facts": ["Expensive", "No free cancellation", "Free breakfast"], "image":"../assets/hotel1.jpg", "price":"599",
  "rooms": [{"guests": "1", "roomName": "Single room", "roomID": "3"}, {"guests": "2", "roomName": "Small apartment", "roomID": "4"}, {"guests": "3", "roomName": "Apartment", "roomID": "5"}]},

  {"id": "2", "hotelName": "The Cozy Stay", "destination": "London", "description": "We are located in the centre of beautiful London.", "facts": ["Good value", "No free cancellation", "Free breakfast"], "image":"../assets/hotel2.jpg", "price":"399",
  "rooms": [{"guests": "1", "roomName": "Single room", "roomID": "6"}, {"guests": "2", "roomName": "Small apartment", "roomID": "7"}, {"guests": "3", "roomName": "Apartment", "roomID": "8"}]},

  {"id": "3", "hotelName": "SimpleHotels", "destination": "Manchester", "description": "Very cheap, we are nice to your wallet.", "facts": ["Cheap", "Free cancellation", "Child-friendly"],"image":"../assets/hotel3.jpg", "price":"99",
  "rooms": [{"guests": "1", "roomName": "Single room", "roomID": "9"}, {"guests": "2", "roomName": "Small apartment", "roomID": "10"}, {"guests": "3", "roomName": "Apartment", "roomID": "11"}]},

  {"id": "4", "hotelName": "The Perfect Palace", "destination": "Los Angeles", "description": "An unforgettable experience, we are the nicest hotel around.", "facts": ["Expensive", "No free cancellation", "All-inclusive"], "image":"../assets/hotel4.jpg", "price":"999",
  "rooms": [{"guests": "1", "roomName": "Single room", "roomID": "12"}, {"guests": "2", "roomName": "Small apartment", "roomID": "13"}, {"guests": "3", "roomName": "Apartment", "roomID": "14"}]},
];

function App() {

  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [guestAmount, setGuestAmount] = useState(0);
  const [chooseCheckInDate, setChooseCheckInDate] = useState("");
  const [chooseCheckOutDate, setChooseCheckOutDate] = useState("");
  const [chosenHotel, setChosenHotel] = useState([]);
  const [chosenRooms, setChosenRooms] = useState([]);
  const [chosenRoom, setChosenRoom] = useState([]);
  const [checkOutStatus, setCheckOutStatus] = useState(false);
  const [bookedHotel, setBookedHotel] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState();
  // Skapar sex state-variabler. En för destinationen, en för incheckningsdatum, en för utcheckningsdatum, en för antalet gäster, en för det valda hotellet och ett för det bokade hotellet.

  function chooseHotel(id) {
    setChosenHotel(hotels[id]);
  }

  function chooseRoom(id, roomID) {
    setChosenRooms(hotels[id].rooms[roomID]);
  }
  console.log(chosenRooms);
  console.log(chosenRoom);


  function backDetailsBox() {
  // Skapar en funktion som gör att användaren går tillbaka till "InformationCard"-komponenten.
      
      setChosenHotel(null);
      // Sätter state-variabeln "chosenHotel" till null.
  
      for (let i = 0; i < hotels.length; i++) {
      // Loopar igenom array:en "hotels".
  
      document.getElementsByClassName("InformationCard")[i].style.display = "block";
      // Visar alla "InformationCard"-komponenter.
    }
  }

  function confirmBooking() {
  // Skapar en funktion som tar emot ett id.

    setBookedHotel(chosenHotel);
  }

  return (
    <div className="App">

      <NavBar/>
      {/*Renderar "NavBar"-komponenten.*/}
      
      <div className="Intro">
        <img src={hotelpool}/>
        <div className="IntroContent">
          <p>Your home away from home</p>
          <p className="IntroSlogan">Where Comfort and Affordability meet</p>
          <a href="#" className="IntroButton">Explore now</a>
        </div>
      </div>
      {/*Renderar "Intro"-komponenten.*/}

      <SearchFilter destination={destination} changeDestination={(e) => setDestination(e.target.value)} 
                checkInDate={checkInDate} changeCheckInDate={(e) => setCheckInDate(e.target.value)}
                checkOutDate={checkOutDate} changeCheckOutDate={(e) => setCheckOutDate(e.target.value)}
                guests={guests} changeGuests={(e) => setGuests(e.target.value)}/>
      {/*Renderar "SearchFilter"-komponenten. Den tar med sig samtliga state-variabler och deras "set"-variant förutom "chosenHotel". */}

      {hotels.filter(function(results) {
      // Filterar array:en "hotels" med hjälp av en funktion som tar emot ett objekt.
              
              if (destination === "" || checkInDate === "" || checkOutDate === "" || guests === "") {
              // Om någon av state-variablerna är tomma så returneras "null" (inget värde)
        
                return null;
                // Returnerar "null" (inget värde).
        
              } else if (results.destination.toLowerCase().includes(destination.toLowerCase())) {
              // Om destinationen i objektet innehåller det som användaren skrivit in i sökfältet så returneras objektet.
        
               return results;
               // Returnerar objektet.
        
              }}).map(({id, hotelName, destination, description, facts, image, price, rooms}) => (
              // Mappar igenom array:en "hotels" och returnerar en "InformationCard"-komponent för varje objekt.

              <InformationCard id={id} hotelName={hotelName} destination={destination} description={description} facts={facts} image={image} price={price} rooms={rooms} chosenRoom={chosenRoom} setChosenRoom={setChosenRoom} chooseHotel={chooseHotel} chooseRoom={chooseRoom}/>
              // Renderar "InformationCard"-komponenten. Den tar med sig samtliga state-variabler förutom deras "set"-variant förutom "chosenHotel".
              // Den tar även med sig funktionen "chooseHotel".
            ))}

      <CheckOutButton/>

      <DetailsBox customerName={customerName} changeCustomerName={(e) => setCustomerName(e.target.value)} customerPhone={customerPhone} 
      changeCustomerPhone={(e) => setCustomerPhone(e.target.value)} customerEmail={customerEmail} changeCustomerEmail={(e) => setCustomerEmail(e.target.value)} 
      guestAmount={guestAmount} changeGuestAmount={(e) => setGuestAmount(e.target.value)} chooseCheckInDate={chooseCheckInDate} changeChooseCheckInDate={(e) => setChooseCheckInDate(e.target.value)} chooseCheckOutDate={chooseCheckOutDate} 
      changeChooseCheckOutDate={(e) => setChooseCheckOutDate(e.target.value)} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} chosenHotel={chosenHotel} backDetailsBox={backDetailsBox} checkOutStatus={checkOutStatus} confirmBooking={confirmBooking}/>
      {/* Renderar "DetailsBox"-komponenten. Den tar med sig state-variabeln "chosenHotel" och funktionen "backDetailsBox". */}

      <ConfirmationMessage bookedHotel={bookedHotel} customerName={customerName} customerPhone={customerPhone} customerEmail={customerEmail} 
      guestAmount={guestAmount} chooseCheckInDate={chooseCheckInDate} chooseCheckOutDate={chooseCheckOutDate} paymentMethod={paymentMethod}/>

      <Footer/>
      {/* Renderar "Footer"-komponenten. */}
      
    </div>
  );
}

export default App;
// Exporterar "App"-komponenten som "App".