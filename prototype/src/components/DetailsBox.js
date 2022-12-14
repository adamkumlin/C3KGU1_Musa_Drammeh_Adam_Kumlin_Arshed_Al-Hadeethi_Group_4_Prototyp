// Musa Drammeh, Adam Kumlin och Arshed-Al Hadeethi

import { useState } from 'react';
// Importerar "useState" från "react".

import staricon from '../images/star_icon.png';
// Importerar en bild.

function DetailsBox(props) {
// Skapar komponenten "DetailsBox", komponenten tar emot props.

  const [travelPriceZero, setTravelPriceZero] = useState(0);
  const [travelPriceOne, setTravelPriceOne] = useState(0);
  // Skapar två state-variabler som heter "travelPriceZero" och "travelPriceOne" och som har värdet "0". 
  // State-variablerna används för räkna ut slutpriset för eventuella resor.

  const checkInDateDays = new Date(props.chooseCheckInDate);
  const checkOutDateDays = new Date(props.chooseCheckOutDate);
  // Skapar två konstanter som innehåller de olika datumen för incheckning och utcheckning.

  const oneDay = 24 * 60 * 60 * 1000;
  // Skapar en konstant som innehåller antalet millisekunder som finns i en dag.

  const dayDifference = Math.round(Math.abs((checkInDateDays - checkOutDateDays) / oneDay));
  // Skapar en konstant som innehåller antalet dagar som finns mellan inchecknings- och utcheckningsdatumet. Funktionen "Math.round" 
  // avrundar till närmaste heltal och funktionen "Math.abs" returnerar absolutbeloppet av "checkInDateDays" minus "checkOutDays" dividerat med "oneDay".

  const validName = new RegExp("[a-zA-ZåäöÅÄÖ]+$");
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  const validPhoneAndCreditCard = new RegExp('^[0-9]+$');
  // Deklarerar variabler som innehåller regex-uttryck som kontrollerar om användaren har skrivit in ett giltigt namn, e-post, telefonnummer och kreditkortsnummer.

  let todaysMonth = new Date();
    // Skapar en en variabel som innehåller ett datum.

  let mm = String(todaysMonth.getMonth() + 1);
  let yyyy = todaysMonth.getFullYear();
  // Skapar variabler som innehåller dagens datum, applicerar dem på det skapade datumet.

  if (mm < 10) {
  // Om månadens datum är mindre än 10.

    mm = "0" + mm;
    // Lägger till en nolla framför månadens datum.
  }

  todaysMonth = `${yyyy}-${mm}`;
  // Ändrar datumet så det blir i formatet "yyyy-mm".

  function handleChange(event) {
  // Skapar en funktion som tar emot ett event.

    props.setPaymentMethod(event.target.value);
    // Sätter state-variabelns värde till den betalningsmetod som användaren har valt.
  }

  function handleTravelCheckZero(event) {
    // Skapar en funktion som tar emot ett event.

    if (event.target.checked) {
      // Om användaren har kryssat i checkboxen.

      setTravelPriceZero(travelPriceZero + parseInt(props.chosenHotel.airports[0].price));
      // Adderar den första resans pris till "travelPriceZero". "parseInt" används för att konvertera strängen till ett heltal.

      props.setBookedTravel(current => [...current, props.chosenHotel.airports[0]]);
      // Den resa som användaren har valt adderas till arrayen.

    } else {

      setTravelPriceZero(travelPriceZero - parseInt(props.chosenHotel.airports[0].price));
      // Annars om användaren har avmarkerat checkboxen så subtraheras resans pris från "travelPriceZero". 
      // "parseInt" används för att konvertera strängen till ett heltal.

      props.setBookedTravel(current => current.filter(travel => travel !== props.chosenHotel.airports[0]));
      // Den resa som användaren har avcheckat raderas från arrayen med hjälp av funktionen "filter".

    }
  }
console.log(props.bookedTravel);
  function handleTravelCheckOne(event) {
    // Skapar en funktion som tar emot ett event.
    if (event.target.checked) {
      // Om användaren har kryssat i checkboxen.

      setTravelPriceOne(travelPriceOne + parseInt(props.chosenHotel.airports[1].price));
      // Adderar den andra resans pris till "travelPriceOne". "parseInt" används för att konvertera strängen till ett heltal.

      props.setBookedTravel(current => [...current, props.chosenHotel.airports[1]]);
      // Den resa som användaren har valt adderas till arrayen.

    } else {

      setTravelPriceOne(travelPriceOne - parseInt(props.chosenHotel.airports[1].price));
      // Annars om användaren har avmarkerat checkboxen så subtraheras resans pris från "travelPriceOne". 
      // "parseInt" används för att konvertera strängen till ett heltal.

      props.setBookedTravel(current => current.filter(travel => travel !== props.chosenHotel.airports[1]));
      // Den resa som användaren har avcheckat raderas från arrayen med hjälp av funktionen "filter".
    }
  }

  let total = props.chosenRooms.price * props.chosenRoomAmount * dayDifference + parseInt(travelPriceZero) + parseInt(travelPriceOne);
  // Skapar en variabel som räknar ut totalpriset för rummen som användaren har valt. 
  // Priset per rum (props.chosenRooms.price) multipliceras med antalet rum (props.chosenRoomAmount) som sedan adderas med "travelPriceZero" och "travelPriceOne".
  // Om en resa inte är vald är värdet på "travelPriceZero" och "travelPriceOne" 0 och därför påverkas inte totalpriset.

  function validateForm() {
  // Skapar en funktion som kontrollerar om användaren har fyllt i alla textfält samt om användaren har skrivit in giltiga värden i textfälten.

    if (!props.customerName || !props.customerPhone || !props.customerEmail || !props.customerCreditCard || !props.customerCreditCardDate || !props.customerCreditCardCVC || !props.paymentMethod) {
    // Om någon av state-variablerna "customerName", "customerPhone", "customerEmail", "customerCreditCard", "customerCreditCardDate", "customerCreditCardCVC" eller "paymentMethod" inte har något värde.

      alert("Please fill out all the fields.");
      // Skriver ut ett felmeddelande.

    } else if (!validName.test(props.customerName)) {
    // Om användaren har skrivit in ett namn som inte stämmer överens med regex-uttrycket "validName".
  
      alert("The name is invalid.");
      // Skriver ut ett felmeddelande.

    } else if (!validEmail.test(props.customerEmail)) {
    // Om användaren har skrivit in en e-post som inte stämmer överens med regex-uttrycket "validEmail".

      alert("The email is invalid.");
      // Skriver ut ett felmeddelande.

    } else if (!validPhoneAndCreditCard.test(props.customerPhone)) {
    // Om användaren har skrivit in ett telefonnummer som inte stämmer överens med regex-uttrycket "validPhoneAndCreditCard".

      alert("The phone number is invalid.");
      // Skriver ut ett felmeddelande.

    } else if (!validPhoneAndCreditCard.test(props.customerCreditCard)) {
    // Om användaren har skrivit in ett kreditkortsnummer som inte stämmer överens med regex-uttrycket "validPhoneAndCreditCard".

      alert("The credit card number is invalid.");
      // Skriver ut ett felmeddelande.

    } else if (!validPhoneAndCreditCard.test(props.customerCreditCardCVC) || props.customerCreditCardCVC.length !== 3) {
    // Om användaren har skrivit in ett CVC-nummer som inte stämmer överens med regex-uttrycket "validPhoneAndCreditCard" eller om CVC-numrets längd inte är lika med 3.

      alert("The credit card CVC is invalid.");
      // Skriver ut ett felmeddelande.

    } else {
      props.setTotalPrice(total);
      props.confirmBooking(props.id)
      // Annars anropas funktionen "confirmBooking" som tar med sig id:t på det hotell som användaren har valt. State-variabeln 
      // "totalPrice" uppdateras med värdet på "total".
    }
  }

  if (!props.checkOutStatus || props.bookingStatus) {
  // Om state-variabeln "checkOutStatus" är falskt, alltså om utcheckningsprocessen inte har påbörjats än. Eller om state-variabeln "bookingStatus" är
  // sann, alltså om bokningen har genomförts.

    return <div></div>;
    // Returnerar en tom div.

  } else {
      
    return (
      <div className="DetailsBox">
          <button onClick={props.goBackDetailsBox} className="backButton">Back</button>
          <h2>Customer details</h2>  
          <label>Name<input type="text" name="userName" value={props.customerName} onChange={props.changeCustomerName} placeholder="John Doe"/></label>
          <label>Phone number<input type="number" name="phone" value={props.customerPhone} onChange={props.changeCustomerPhone} placeholder="1234567890"/></label>
          <label>E-mail<input type="email" name="email" value={props.customerEmail} onChange={props.changeCustomerEmail} placeholder="example@example.com"/></label>
          <label>Credit card number<input type="number" name="creditCard" value={props.customerCreditCard} onChange={props.changeCustomerCreditCard} placeholder="1234567890"/></label>
          <label>Credit card expiration date<input type="month" name="creditCardDate" min={todaysMonth} value={props.customerCreditCardDate} onChange={props.changeCustomerCreditCardDate}/></label>
          <label>CVC<input type="number" name="creditCardCVC" value={props.customerCreditCardCVC} onChange={props.changeCustomerCreditCardCVC} placeholder="555"/></label>
          <label> Pay now with credit card<input type="radio" name="paymentMethod" value="With credit card" checked={props.paymentMethod === "With credit card"} onChange={handleChange}/></label>
          <label>Pay at the hotel<input type="radio" name="paymentMethod" value="At the hotel" checked={props.paymentMethod === "At the hotel"} onChange={handleChange}/></label> 
          <p>Choose travel (optional)</p>
          <label>{props.chosenHotel.airports[0].airportName} ${props.chosenHotel.airports[0].price}<input type="checkbox" value={props.chosenHotel.airports[0].price} onChange={handleTravelCheckZero}/></label>
          <label>{props.chosenHotel.airports[1].airportName} ${props.chosenHotel.airports[1].price}<input type="checkbox" value={props.chosenHotel.airports[1].price} onChange={handleTravelCheckOne}/></label>
          <label className="textareaLabel">Message (optional) <textarea placeholder="Dietary requirements, estimated time of arrival..."value={props.customerMessage} onChange={props.changeCustomerMessage}/></label> 
          <h2>Hotel details</h2>
          <p>Hotel name: {props.chosenHotel.hotelName}</p>
          <p>{props.chosenHotel.stars} <img src={staricon} className="icon" alt="Star icon"/></p>
          <p>Hotel destination: {props.chosenHotel.destination}</p>
          <p>Room name: {props.chosenRooms.roomName}</p>
          <p>Check-in date: {props.chooseCheckInDate}</p>
          <p>Check-out date: {props.chooseCheckOutDate}</p>
          <p>Total price: ${total} for {props.chosenRoomAmount} room(s) for {props.chosenGuestAmount} guest(s) for {dayDifference} day(s) {travelPriceZero + travelPriceOne > 0 && <span>and travel</span>}</p> {/* Om "travelPriceZero" adderat med "travelPriceOne" är större än 0 så skrivs "and travel" ut. */} 
        <button onClick={validateForm}>Book</button>
        {/* Annars returneras två knappar, två h2-element, nio etiketter och input-element. Knappen anropar funktionen "validateForm" när användaren klickar på den. Dessutom skrivs en massa text ut.
        Elementen med information om hotellen förses med informationen med hjälp av props. Bakåtknappen tar användaren tillbaka till sidan där ett rum väljs. */}
      </div>
    )
  }
}
  
export default DetailsBox;
// Exporterar komponenten som "DetailsBox".
