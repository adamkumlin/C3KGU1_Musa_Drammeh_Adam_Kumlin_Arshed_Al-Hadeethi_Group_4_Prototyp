function ConfirmationMessage(props) {
    // Komponenten tar emot props.
    
      if (!props.bookedHotel) {
      // Om state-variabeln "chosenHotel" inte har något värde, alltså om något hotell inte har valts än.
    
        return <div></div>;
        // Returnerar en tom div.
    
      } else {
          
          return (
            <div className="ConfirmationMessage">
                <h1> Thank you for your booking!</h1>

                <h2>Booking details</h2>
                <ul>
                    <li>Name: {props.customerName}</li>
                    <li>Phone number: {props.customerPhone}</li>
                    <li>E-mail: {props.customerEmail}</li>
                    <li>You have chosen: {props.paymentMethod}</li>
                </ul>

                <h2>Hotel details</h2>
                <ul>
                    <li>Hotel name: {props.bookedHotel.hotelName}</li>
                    <li>Hotel destination: {props.bookedHotel.destination}</li>
                    <li>Guests: {props.guestAmount}</li>
                    <li>Check-in date: {props.chooseCheckInDate}</li>
                    <li>Check-out date: {props.chooseCheckOutDate}</li>
                </ul>
            </div>
          )
        }
      }
      
      export default ConfirmationMessage;
      // Exporterar komponenten som "ConfirmationMessage".