import locationicon from '../images/location_icon.png';
import staricon from '../images/star_icon.png';
// Importerar två bilder.

function InformationCard(props) {
// Komponenten tar emot props.

function handleClick() {
// Funktionen "handleClick" körs när användaren klickar på en knapp.

  props.chooseHotel(props.id)
  // Kör funktionen "chooseHotel" och skickar med id:t på det hotell som användaren har valt.
}

if (!props.chosenHotel === "null" || props.chosenHotel) {
  // Om state-variabeln "chosenHotel" har ett värde som ej är "null" eller ett annat värde, alltså om användaren har valt ett hotell.

    return <div></div>;
    // Returnerar en tom div.

  } else {
    
  return (

    <div className="InformationCard">
      <div key={props.id}>
        <h2>{props.hotelName}</h2>
        <p><img src={locationicon} className="icon" alt="Location icon"/>{props.destination}</p>
        <p>{props.description}</p>
        <p>{props.stars} <img src={staricon} className="icon" alt="Star icon"/></p>
        <ul>
          <li>{props.facts[0]}</li>
          <li>{props.facts[1]}</li>
          <li>{props.facts[2]}</li>
        </ul>
        <img src={`${props.image}`} alt="Hotel room"/>
        <button onClick={handleClick}>Choose hotel</button>
        <p>Starting at ${props.price} per night</p>
        {/* Skapar en div med ett h2-element, ett ul-element, text och en bild. Dessa element fylls med information om hotellen med props. */}
      </div>
    </div>
  )
}}

export default InformationCard;
// Exporterar komponenten som "InformationCard".
