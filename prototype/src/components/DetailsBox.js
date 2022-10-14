function DetailsBox(props) {
// Komponenten tar emot props.

  if (!props.chosenHotel) {
  // Om state-variabeln "chosenHotel" inte har något värde, alltså om något hotell inte har valts än.

    return <div></div>;
    // Returnerar en tom div.

  } else {
      
      return (
        <div className="DetailsBox">
            <button onClick={props.backDetailsBox} className="backButton">Back</button>
            <h2>{props.chosenHotel.hotelName}</h2>       
            <label>Name<input type="text"/></label>
            <label>Phone number<input type="text"/></label>
            <label>E-mail<input type="text"/></label>
            <label>Credit card number<input type="text"/></label>
              <input type="radio" value="creditCard" name="creditCard"/> Pay now with credit card
              <input type="radio" value="atHotel" name="atHotel"/> Pay at the hotel
          <button onClick={() => props.confirmBooking(props.id)}>Choose</button>
          {/* Annars renderas två knappar, ett h2-element, fyra etiketter och två radioknappar.
          Elementen med information om hotellen förses med informationen med hjälp av props. */}
        </div>
      )
    }
  }
  
  export default DetailsBox;
  // Exporterar komponenten som "DetailsBox".