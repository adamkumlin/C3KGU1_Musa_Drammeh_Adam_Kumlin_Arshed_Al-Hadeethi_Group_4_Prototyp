import facebookicon from '../images/facebook_icon.png';
import instagramicon from '../images/instagram_icon.png';
import twittericon from '../images/twitter_icon.png';
// Importerar tre bilder.

function Footer() {

    return(
        <div className="Footer">
            <h2>HotelsNOW</h2>
            <p>hotelsnow@hotelsnow.com</p>
            <img src={facebookicon}/>
            <img src={instagramicon}/>
            <img src={twittericon}/>
            {/* Placerar tre bilder, en paragraf och ett h1-element. */}
        </div>
    )
}

export default Footer;
// Exporterar komponenten som "Footer".