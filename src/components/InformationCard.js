import locationicon from '../images/location_icon.png';
// Importerar en bild.

function InformationCard(props) {
// Komponenten tar emot props.
    
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
        <p>${props.price} per night</p>
        <button onClick={() => props.chooseHotel(props.id)}>Choose</button>
      </div>
      {/*Renderar ett h2-element, tre p-element, en bild och en knapp. Dessa element fylls med information om hotellen med props. En div omringar alla element så att det är
      möjligt att skilja på hotellen. */}
    </div>
  )
}

export default InformationCard;
// Exporterar komponenten som "InformationCard".