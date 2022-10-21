import calendaricon from "../images/calendar_icon.png";
// Importerar en bild.

function SearchFilter(props) {
// Komponenten tar emot props.

    function handleChange(e) {
    // Funktionen "handleChange" körs när användaren ändrar något i input-fältet.

        props.setSearchTerm(e.target.value);
        // Ger state-variabeln "searchTerm" värdet som användaren skriver in i input-fältet.
    }

    function handleClick() {
    // Funktionen "handleClick" körs när användaren klickar på knappen.
        
       
        props.setDestination(props.searchTerm);
        // Ger state-variabeln "destination" "searchTerm":s värde.
    }

    return(
        <div className="SearchFilter">
            <img src={calendaricon} alt="Bild på en kalenderikon"/>
            <label>Destination<input type="text" name="destination" value={props.searchTerm} onChange={handleChange} placeholder="New York"/></label>
            <label>Check in<input type="date" name="checkInDate" value={props.checkInDate} onChange={props.changeCheckInDate}/></label>
            <label>Check out<input type="date" name="checkOutDate" value={props.checkOutDate} onChange={props.changeCheckOutDate}/></label>
            <label>Guests<input type="number" name="guests" value={props.guests} onChange={props.changeGuests}  placeholder="1"/></label>
            <label>Check availability<button onClick={handleClick}>Search</button></label>
            {/* Skapar fem input-element, fem etiketter och en knapp. */}
        </div>
    )
}

export default SearchFilter;
// Exporterar komponenten som "SearchFilter".