function ConfirmationMessage(props) {
    // Komponenten tar emot props.
    
      if (!props.bookedHotel) {
      // Om state-variabeln "bookedHotel" är falsk, alltså om användaren inte har bokat ett hotell.
    
        return <div></div>;
        // Returnerar en tom div.
    
      } else {
          
          return (
            <div className="ConfirmationMessage">
                <h2> Thank you for your booking!</h2>

                <h3>Booking details</h3>
                <ul>
                    <li>Name: {props.customerName}</li>
                    <li>Phone number: {props.customerPhone}</li>
                    <li>E-mail: {props.customerEmail}</li>
                    <li>You have chosen: {props.paymentMethod}</li>
                    <li>Amount paid: ${props.totalPrice}</li>
                    {props.customerMessage.length > 0 && <li>Message: {props.customerMessage}</li>} {/* Om användarens skrivna meddelande har en längd som
                    är längre än 0 skrivs det ut. */}
                </ul>

                <h3>Hotel details</h3>
                <ul>
                    <li>Hotel name: {props.bookedHotel.hotelName}</li>
                    <li>Hotel destination: {props.bookedHotel.destination}</li>
                    <li>Room name: {props.chosenRooms.roomName}</li>
                    <li>Guests: {props.chosenGuestAmount}</li>
                    <li>Check-in date: {props.chooseCheckInDate}</li>
                    <li>Check-out date: {props.chooseCheckOutDate}</li>
                </ul>
            </div>
            // Renderar en div med en h2-titel, två h3-titlar och två ul-listor. Dessa element fylls med information om hotellen med props.
          )
        }
      }
      
      export default ConfirmationMessage;
      // Exporterar komponenten som "ConfirmationMessage".