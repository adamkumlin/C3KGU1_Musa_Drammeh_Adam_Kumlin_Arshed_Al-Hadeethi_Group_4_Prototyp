import calendaricon from "../images/calendar_icon.png";
// Importerar en bild.

function SearchFilter(props) {
// Komponenten tar emot props.

    return(
        <div className="SearchFilter">
            <img src={calendaricon}/>
            <label>Destination<br></br> <input type="text" name="destination" value={props.destination} onChange={props.changeDestination} placeholder="Barcelona"/></label>
            <label>Check in<br></br> <input type="date" name="checkInDate" value={props.checkInDate} onChange={props.changeCheckInDate}/></label>
            <label>Check out<br></br> <input type="date" name="checkOutDate" value={props.checkOutDate} onChange={props.changeCheckOutDate}/></label>
            <label>Guests<br></br> <input type="number" name="guests" value={props.guests} onChange={props.changeGuests}/></label>
            <label>Check availability<br></br> <input type="submit" onClick={props.searchHotels}/></label>
            {/* Skapar fem input-element, fem etiketter och en knapp. */}
        </div>
    )
}

export default SearchFilter;
// Exporterar komponenten som "SearchFilter".