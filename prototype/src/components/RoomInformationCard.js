import { useState } from 'react';

function RoomInformationCard(props) {
// Komponenten tar emot props.

    const [disabled, setDisabled] = useState(true);

    function handleChange(event) {
    // Skapar en funktion som tar emot ett event.

        props.chooseRooms(props.id, event.target.value);
        setDisabled(false);
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
            <button disabled={disabled} onClick={() => props.checkOut()}>Check out</button>
        </div>
    </div>
  )
}

export default RoomInformationCard;
// Exporterar komponenten som "RoomInformationCard".