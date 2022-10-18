import locationicon from '../images/location_icon.png';
// Importerar en bild.

function InformationCard(props) {
// Komponenten tar emot props.

function handleClick() {
// Funktionen "handleClick" körs när användaren klickar på en knapp.

  props.chooseHotel(props.id)
  // Anropar funktionen "chooseHotel" som finns i App.js och skickar med id:t på det hotell som användaren har valt.
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
        <p><img src={locationicon} className="informationCardIcon"/>{props.destination}</p>
        <p>{props.description}</p>
        <ul>
          <li>{props.facts[0]}</li>
          <li>{props.facts[1]}</li>
          <li>{props.facts[2]}</li>
        </ul>
        <img src={`${props.image}`}/>
        <button onClick={handleClick}>Choose hotel</button>
        <p>Starting at ${props.price} per night</p>
        {/* Skapar en div med en h2-titel, en ul-lista, text och en bild. Dessa element fylls med information om hotellen med props. */}
      </div>
    </div>
  )
}}

export default InformationCard;
// Exporterar komponenten som "InformationCard".