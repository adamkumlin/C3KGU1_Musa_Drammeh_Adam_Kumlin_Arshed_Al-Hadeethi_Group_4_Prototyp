import locationicon from '../images/location_icon.png';

import RoomInformationCard from "./RoomInformationCard";
// Importerar en bild.

function InformationCard(props) {
// Komponenten tar emot props.

if (props.checkOutStatus) {
  // Om state-variabeln "chosenHotel" inte har något värde, alltså om något hotell inte har valts än.

    return <div></div>;
    // Returnerar en tom div.

  } else {
    
  return (

    <div className="InformationCard">
      <div key={props.id}>
        <h2>{props.hotelName}</h2>
        <p><img src={locationicon} className="informationCardIcon"/>{props.destination}</p>
        <p>{props.description}</p>
        <ul>
          <li>{props.facts[0]}</li>
          <li>{props.facts[1]}</li>
          <li>{props.facts[2]}</li>
        </ul>
        <img src={`${props.image}`}/>
        <p>Starting at ${props.price} per night</p>
        {/* Skapar en div med en h2-titel, en ul-lista, text och en bild. Dessa element fylls med information om hotellen med props. */}

        <RoomInformationCard rooms={props.rooms} airports={props.airports} id={props.id} checkOut={props.checkOut} 
        chosenRoomAmount={props.chosenRoomAmount} setChosenRoomAmount={props.setChosenRoomAmount} chooseRooms={props.chooseRooms} 
        chosenGuestAmount={props.chosenGuestAmount} setChosenGuestAmount={props.setChosenGuestAmount}
        chooseCheckInDate={props.chooseCheckInDate} setChooseCheckInDate={props.setChooseCheckInDate} chooseCheckOutDate={props.chooseCheckOutDate} 
        setChooseCheckOutDate={props.setChooseCheckOutDate}/>
        {/* Renderar "RoomInformationCard"-komponenten. Den tar med sig flera state-variabler och deras set-varianter som ändrar, funktionerna chooseRooms() samt checkOut() tas också med .*/}
      </div>
    </div>
  )
}}

export default InformationCard;
// Exporterar komponenten som "InformationCard".