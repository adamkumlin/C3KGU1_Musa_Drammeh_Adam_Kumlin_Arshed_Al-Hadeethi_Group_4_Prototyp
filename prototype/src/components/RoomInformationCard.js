import { useState } from 'react';
// Importerar State.

function RoomInformationCard(props) {
// Komponenten tar emot props.

    const [buttonDisabled, setButtonDisabled] = useState(true);
    // Skapar en state-variabel som heter "buttonDisabled" och som har värdet "true". State-variabeln används för att kontrollera om knappen ska vara inaktiverad eller inte.

    const [checkOutDateDisabled, setCheckOutDateDisabled] = useState(true);

    const validRoomAndGuestAmount = new RegExp('^[1-9]+$');
    // Skapar en variabel som innehåller ett regex-uttryck som kontrollerar om användaren har skrivit in ett giltigt antal rum och gäster.

    let todaysDate = new Date();
    // Skapar en en variabel som innehåller ett datum.

    let dd = String(todaysDate.getDate());
    let mm = String(todaysDate.getMonth() + 1);
    let yyyy = todaysDate.getFullYear();
    // Skapar variabler som innehåller dagens datum, applicerar dem på det skapade datumet.

    if (dd < 10) {
    // Om dagens datum är mindre än 10.

      dd = "0" + dd;
      // Lägger till en nolla framför dagens datum.
    }

    if (mm < 10) {
    // Om månadens datum är mindre än 10.

      mm = "0" + mm;
      // Lägger till en nolla framför månadens datum.
    }

    todaysDate = `${yyyy}-${mm}-${dd}`;
    // Ändrar datumet så det blir i formatet "yyyy-mm-dd".

    function handleChange(event) {
    // Skapar en funktion som tar emot ett event.

        props.chooseRooms(props.id, event.target.value);
        // Anropar funktionen "chooseRooms" som finns i App.js och skickar med id:t på det hotell som användaren har valt och det rum som användaren har valt.

        setButtonDisabled(false);
        // Sätter state-variabeln "disabled" till "false" så att knappen blir aktiverad.
    }

    function handleCheckInDateChange(event) {
    // Skapar en funktion som tar emot ett event.

      props.setChooseCheckInDate(event.target.value)
      // Anropar sätter "chooseCheckInDate" till det datum som användaren har valt.

      setCheckOutDateDisabled(false);
      // Sätter state-variabeln "disabled" till "false" så att input-elementet blir aktiverat.
    }

    function validateRoomInformation() {
    // Skapar en funktion som kontrollerar om användaren har valt ett giltigt antal rum, gäster och inchecknings-samt utcheckningsdatum.

        if (!props.chosenGuestAmount || !props.chosenRoomAmount || !props.chooseCheckInDate || !props.chooseCheckOutDate) {
        // Om någon av state-variablerna "chosenGuestAmount", "chosenRoomAmount", "chooseCheckInDate" eller "chooseCheckOutDate" inte har något värde.

            alert("Please fill out all the fields.");
            // Skriver ut ett felmeddelande.

          } else if (!validRoomAndGuestAmount.test(props.chosenGuestAmount)) {
            // Om användaren har skrivit in ett ett antal gäster som inte stämmer överens med regex-uttrycket "validRoomAndGuestAmount".

            alert("The guest amount is invalid.");
            // Skriver ut ett felmeddelande.

          } else if (!validRoomAndGuestAmount.test(props.chosenRoomAmount)) {
            // Om användaren har skrivit in ett ett antal rum som inte stämmer överens med regex-uttrycket "validRoomAndGuestAmount".

            alert("The room amount is invalid.");
            // Skriver ut ett felmeddelande.

          } else if (props.chooseCheckInDate === props.chooseCheckOutDate){
            // Om chooseCheckInDate är lika med chooseCheckOutDate. Alltså om användaren har valt samma datum för in- och utcheckning.

            alert("The check in and check out date can't be the same.");
            // Skriver ut ett felmeddelande.

          } else {
            props.checkOut();
            // Annars anropas funktionen "checkOut" som finns i App.js.
          }
    }

  return (

    <div className="RoomInformationCard">
        <div key={props.id}>

            <ul key={props.rooms[0].roomID}>
                <li>{props.rooms[0].roomName}</li>
                <li>Room for {props.rooms[0].guests} guest(s)</li>
                <li>Price: ${props.rooms[0].price} per night</li>
                <label>Choose room <input type="radio" name="chooseRooms" value={props.rooms[0].roomID} onChange={handleChange}/></label>
            </ul>

            <ul key={props.rooms[1].roomID}>
                <li>{props.rooms[1].roomName}</li>
                <li>Room for {props.rooms[1].guests} guests</li>
                <li>Price: ${props.rooms[1].price} per night</li>
                <label>Choose room <input type="radio" name="chooseRooms" value={props.rooms[1].roomID} onChange={handleChange}/></label>
            </ul>

            <ul key={props.rooms[2].roomID}>
                <li>{props.rooms[2].roomName}</li>
                <li>Room for {props.rooms[2].guests} guests</li>
                <li>Price: ${props.rooms[2].price} per night</li>
                <label>Choose room <input type="radio" name="chooseRooms" value={props.rooms[2].roomID} onChange={handleChange}/></label>
            </ul>
            <label>Choose guest amount <input type="number" name="guestAmount" className="roomAmount" min="1" value={props.chosenGuestAmount} onChange={(e) => props.setChosenGuestAmount(e.target.value)}/></label>
            <label>Choose room amount <input type="number" name="roomAmount" className="roomAmount" min="1" value={props.chosenRoomAmount} onChange={(e) => props.setChosenRoomAmount(e.target.value)}/></label>
            <label>Choose check-in date<input type="date" min={todaysDate} className="chooseCheckInDate" name="chooseCheckInDate" value={props.chooseCheckInDate} onChange={handleCheckInDateChange}/></label>
            <label>Choose check-out date<input type="date" min={props.chooseCheckInDate} className="chooseCheckOutDate" disabled={checkOutDateDisabled} name="chooseCheckOutDate" value={props.chooseCheckOutDate} onChange={(e) => props.setChooseCheckOutDate(e.target.value)}/></label>
            <button disabled={buttonDisabled} onClick={validateRoomInformation}>Check out</button>
        </div>
        {/* Skapar en div med information om rummen (med hjälp av props), en radioknapp för att välja rummet samt en knapp för att gå vidare till nästa steg. "chooseCheckInDate"-elementet
        ges variabeln "today" som min-attribut. "chooseCheckOutDate"-elementet ges värdet "chooseCheckOutDate" som min-attribut. Slutligen ges knappens min-attribut "buttonDisabled":s värde. */}
    </div>
  )
}

export default RoomInformationCard;
// Exporterar komponenten som "RoomInformationCard".