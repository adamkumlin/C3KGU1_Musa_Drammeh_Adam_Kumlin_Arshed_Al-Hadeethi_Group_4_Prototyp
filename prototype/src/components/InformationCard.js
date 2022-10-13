import locationicon from '../images/location_icon.png';

function InformationCard(props) {
    
  return (

    <div className="InformationCard">
      <div key={props.id}>
        <h2>{props.hotelName}</h2>
        <p><img src={locationicon} className="informationCardIcon"/>{props.destination}</p>
        <p>{props.description}</p>
        <img src={`${props.image}`}/>
        <p>${props.price} per night</p>
        <button onClick={() => props.chooseHotel(props.id)}>Choose</button>
      </div>
    </div>
  )
}

export default InformationCard;
// Exporterar komponenten som "InformationCard".