function CheckOutButton(props) {
// Komponenten tar emot props.
    
  return (

    <div className="CheckOutButton">
      <button onClick={() => props.checkOut}>Check out</button>
    </div>
  )
}

export default CheckOutButton;
// Exporterar komponenten som "InformationCard".