// Musa Drammeh, Adam Kumlin och Arshed-Al Hadeethi

import { useState } from "react";
// Importerar useState från react.

import calendaricon from "../images/calendar_icon.png";
// Importerar en bild.

function SearchFilter(props) {
// Komponenten tar emot props.

  const [checkOutDateDisabled, setCheckOutDateDisabled] = useState(true);
  // Skapar en state-variabel "checkOutDateDisabled" som är ändras till "true".

  const validRoomAndGuestAmount = new RegExp('^[1-9]+$');
  // Skapar en variabel som innehåller ett regex-uttryck som kontrollerar om användaren har skrivit in ett giltigt antal rum och gäster.

  let todaysDate = new Date();
  // Skapar en en variabel som innehåller ett datum.

  let dd = String(todaysDate.getDate());
  let mm = String(todaysDate.getMonth() + 1);
  let yyyy = todaysDate.getFullYear();
  // Skapar variabler som innehåller dagens datum, de tillämpas på det skapade datumet ("todaysDate").

  if (dd < 10) {
  // Om dagens nummer är mindre än 10.

    dd = "0" + dd;
    // Lägger till en nolla framför dagens nummer.
  }

  if (mm < 10) {
  // Om månadens nummer är mindre än 10.

    mm = "0" + mm;
    // Lägger till en nolla framför månadens nummer.
  }

  todaysDate = `${yyyy}-${mm}-${dd}`;
  // Lägger till variablerna till datumet i formatet "yyyy-mm-dd".


  function handleChange(e) {
  // Funktionen "handleChange" körs när användaren ändrar något i input-fältet.

    props.setSearchTerm(e.target.value);
    // Ger state-variabeln "searchTerm" värdet som användaren skriver in i input-fältet.
  }

  function handleCheckInDateChange(event) {
  // Skapar en funktion som tar emot ett event.

    props.setCheckInDate(event.target.value)
    // Ändrar "chooseCheckInDate" till det datum som användaren har valt.

    setCheckOutDateDisabled(false);
    // Ändrar state-variabeln "checkOutDate" till "false" så att input-elementet blir aktiverat.
  }

  function handleClick() {
  // Funktionen "handleClick" körs när användaren klickar på knappen.
      
    if (!props.searchTerm || props.guests < 1 || !props.checkInDate || !props.checkOutDate) {
    // Om state-variabeln "guests" har ett värde som är mindre än 1 eller om state-variabeln "checkInDate" eller "checkOutDate" är tomma.

      alert("Please fill out all the fields.");
      // Visar ett felmeddelande.

    } else if (!validRoomAndGuestAmount.test(props.guests)) {
    // Annars om regex-uttrycket inte matchar state-variabeln "guests".

      alert("Please enter a valid number of guests.");
      // Visar ett felmeddelande.

    } else if (props.checkInDate === props.checkOutDate) {
      // Om checkInDate är lika med checkOutDate. Alltså om användaren har valt samma datum för in- och utcheckning.

      alert("The check in and check out date can't be the same.");
      // Visar ett felmeddelande.

    } else {

      props.setDestination(props.searchTerm);
      // Annars ges state-variabeln "destination" "searchTerm":s värde.
    }
  }

  return(
    <div className="SearchFilter">
        <img src={calendaricon} alt="Bild på en kalenderikon"/>
        
        <label>Destination<input type="text" name="destination" value={props.searchTerm} onChange={handleChange} placeholder="New York"/></label>
        <label>Check in<input type="date" name="checkInDate" min={todaysDate} value={props.checkInDate} onChange={handleCheckInDateChange}/></label>
        <label>Check out<input disabled={checkOutDateDisabled} type="date" min={props.checkInDate} name="checkOutDate" value={props.checkOutDate} onChange={(e) => props.setCheckOutDate(e.target.value)}/></label>
        <label>Guests<input type="number" name="guests" value={props.guests} onChange={(e) => props.setGuests(e.target.value)}  placeholder="1"/></label>
        <label>Check availability<button onClick={handleClick}>Search</button></label>
        {/* Skapar fem input-element, en bild, fem etiketter och en knapp. */}
    </div>
  )
}

export default SearchFilter;
// Exporterar komponenten som "SearchFilter".
