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
        <RoomInformationCard rooms={props.rooms} id={props.id} checkOut={props.checkOut} 
        chosenRoomAmount={props.chosenRoomAmount} setChosenRoomAmount={props.setChosenRoomAmount} chooseRooms={props.chooseRooms} 
        chosenGuestAmount={props.chosenGuestAmount} setChosenGuestAmount={props.setChosenGuestAmount}
        chooseCheckInDate={props.chooseCheckInDate} setChooseCheckInDate={props.setChooseCheckInDate} chooseCheckOutDate={props.chooseCheckOutDate} 
        setChooseCheckOutDate={props.setChooseCheckOutDate}/>
      </div>
      {/*Renderar ett h2-element, tre p-element, en bild och en knapp. Dessa element fylls med information om hotellen med props. En div omringar alla element så att det är
      möjligt att skilja på hotellen. */}
    </div>
  )
}}

export default InformationCard;
// Exporterar komponenten som "InformationCard".