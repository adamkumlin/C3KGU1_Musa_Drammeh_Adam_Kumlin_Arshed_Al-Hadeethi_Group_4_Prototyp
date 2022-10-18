import facebookicon from '../images/facebook_icon.png';
import instagramicon from '../images/instagram_icon.png';
import twittericon from '../images/twitter_icon.png';
// Importerar tre bilder.

function Footer() {

    return(
        <div className="Footer">
            <h2>HotelsNOW</h2>
            <a href="mailto:hotelsnow@hotelsnow.com">hotelsnow@hotelsnow.com</a><br></br>
            <img src={facebookicon}/>
            <img src={instagramicon}/>
            <img src={twittericon}/>
            {/* Placerar tre bilder, en länk och ett h1-element. */}
        </div>
    )
}

export default Footer;
// Exporterar komponenten som "Footer".