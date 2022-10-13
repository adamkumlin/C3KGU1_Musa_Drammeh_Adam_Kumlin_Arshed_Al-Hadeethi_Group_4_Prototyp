function DetailsBox(props) {

  if (!props.chosenHotel) {

    return <div></div>;

  } else {
      
      return (
        <div className="DetailsBox">
            <h2>{props.chosenHotel.hotelName}</h2>       
            <label>Name<input type="text"/></label>
            <label>Phone number<input type="text"/></label>
            <label>E-mail<input type="text"/></label>
            <label>Credit card number<input type="text"/></label>
              <input type="radio" value="creditCard" name="creditCard"/> Pay now with credit card
              <input type="radio" value="atHotel" name="atHotel"/> Pay at the hotel
          <button onClick={() => props.confirmBooking(props.id)}>Choose</button>
        </div>
      )
    }
  }
  
  export default DetailsBox;
  // Exporterar komponenten som "DetailsBox".