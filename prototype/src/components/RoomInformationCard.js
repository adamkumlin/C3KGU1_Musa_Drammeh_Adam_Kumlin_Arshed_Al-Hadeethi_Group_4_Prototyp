import { useState } from "react";

function RoomInformationCard(props) {
// Komponenten tar emot props.

const [checkedRooms, setCheckedRooms] = useState([]);

let updatedCheckedRooms = [...checkedRooms];

    function handleCheckedChange(e) {
    // Funktionen tar emot ett event.

      if (e.target.checked) {
        updatedCheckedRooms = [...checkedRooms, e.target.value];
      } else {
        updatedCheckedRooms.splice(checkedRooms.indexOf(e.target.value), 1);
      }
      setCheckedRooms(updatedCheckedRooms);
    }
  return (

    <div className="RoomInformationCard">
        <div key={props.id}>
            <ol>
                <li>
                    <ul key={props.rooms[0].roomID}>
                        <li>{props.rooms[0].roomName}</li>
                        <li>Room for {props.rooms[0].guests} guest(s)</li>
                        <label>Choose room <input type="checkbox" value={props.rooms[0].roomID} onChange={handleCheckedChange}/></label>
                    </ul>
                </li>

                <li>
                    <ul key={props.rooms[1].roomID}>
                        <li>{props.rooms[1].roomName}</li>
                        <li>Room for {props.rooms[1].guests} guests</li>
                        <label>Choose room <input type="checkbox" value={props.rooms[1].roomID} onChange={handleCheckedChange}/></label>
                    </ul>
                </li>

                <li>
                    <ul key={props.rooms[2].roomID}>
                        <li>{props.rooms[2].roomName}</li>
                        <li>Room for {props.rooms[2].guests} guests</li>
                        <label>Choose room <input type="checkbox" value={props.rooms[2].roomID} onChange={handleCheckedChange}/></label>
                    </ul>
                </li>
            </ol>
            <button onClick={() => props.checkOut(props.id, updatedCheckedRooms)}>Check out</button>
        </div>
    </div>
  )
}

export default RoomInformationCard;
// Exporterar komponenten som "RoomInformationCard".