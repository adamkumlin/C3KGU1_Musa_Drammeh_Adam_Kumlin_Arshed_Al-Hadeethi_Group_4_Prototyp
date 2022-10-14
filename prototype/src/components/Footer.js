import facebookicon from '../images/facebook_icon.png';
import instagramicon from '../images/instagram_icon.png';
import twittericon from '../images/twitter_icon.png';
// Importerar tre bilder.

function Footer() {

    return(
        <div className="Footer">
            <h1>HotelsNOW</h1>
            <a href="mailto:hotelsnow@hotelsnow.com">hotelsnow@hotelsnow.com</a><br></br>
            <img src={facebookicon}/>
            <img src={instagramicon}/>
            <img src={twittericon}/>
            {/* Renderar tre bilder, en länk och ett h1-element. */}

            <h2>About</h2>
            <p>Our Story</p>
            <p>Why us?</p>
            <p>How it works</p>

            <h2>Contacts</h2>
            <p>Help center</p>
            <p>FAQs</p>
            <p>Careers</p>
            <p>Press</p>
            {/* Renderar text och h2-element. */}
        </div>
    )
}

export default Footer;
// Exporterar komponenten som "Footer".