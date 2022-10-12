function InformationCard(props) {
    
  return (

    <div className="InformationCard">
        <h2>{props.hotelName}</h2>
        <p>{props.destination}</p>
        <p>{props.description}</p>
        <img src={props.image}/>
        <p>${props.price} per night</p>
    </div>
  )
}

export default InformationCard;
// Exporterar komponenten som "InformationCard".