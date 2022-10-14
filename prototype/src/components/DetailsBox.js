function DetailsBox(props) {
// Komponenten tar emot props.

function handleChange(event) {
  // Skapar en funktion som tar emot ett event.

    props.setPaymentMethod(event.target.value);
  }

  if (!props.chosenHotel) {
  // Om state-variabeln "chosenHotel" inte har något värde, alltså om något hotell inte har valts än.

    return <div></div>;
    // Returnerar en tom div.

  } else {
      
      return (
        <div className="DetailsBox">
            <button onClick={props.backDetailsBox} className="backButton">Back</button>
            <h2>Customer details</h2>
            <form>       
            <label>Name<input type="text" name="userName" value={props.customerName} onChange={props.changeCustomerName} required placeholder="John Doe"/></label>
            <label>Phone number<input type="text" name="phone" value={props.customerPhone} onChange={props.changeCustomerPhone} required placeholder="1234567890"/></label>
            <label>E-mail<input type="text" name="email" value={props.customerEmail} onChange={props.changeCustomerEmail} required placeholder="example@example.com"/></label>
            <label>Credit card number<input type="text" required placeholder="1234567890"/></label>
            <input type="radio" name="paymentMethod" value="With credit card" checked={props.paymentMethod === "With credit card"} onChange={handleChange}/> Pay now with credit card
            <input type="radio" name="paymentMethod" value="At the hotel" checked={props.paymentMethod === "At the hotel"} onChange={handleChange}/> Pay at the hotel
            <h2>Hotel details</h2>
            <p>Hotel name: {props.chosenHotel.hotelName}</p>
            <p>Hotel destination: {props.chosenHotel.destination}</p>
            <label>Choose guests<input type="number" name="guestAmount" value={props.guestAmount} onChange={props.changeGuestAmount} required/></label>
            <label>Choose check-in date<input type="date" name="chooseCheckInDate" value={props.chooseCheckInDate} onChange={props.changeChooseCheckInDate} required/></label>
            <label>Choose check-out date<input type="date" name="chooseCheckOutDate" value={props.chooseCheckOutDate} onChange={props.changeChooseCheckOutDate} required/></label>
            </form>
          <button onClick={() => props.confirmBooking(props.id)}>Book</button>
          {/* Annars renderas två knappar, ett h2-element, fyra etiketter och två radioknappar.
          Elementen med information om hotellen förses med informationen med hjälp av props. */}
        </div>
      )
    }
  }
  
  export default DetailsBox;
  // Exporterar komponenten som "DetailsBox".