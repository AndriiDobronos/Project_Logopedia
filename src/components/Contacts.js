
import "./contacts.style.scss"
import map from "./static/footer/map-Vinogradov.png"
import Footer from "./Footer";
import contents from "./../utils/allTexts"


const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
            <h1>
                {contents.title[5].text}
            </h1>
            <div className="contacts-box">
                <h2 className="contacts__title">
                    {contents.navigation[5].text}
                </h2>

                <nav className="contacts__list">
                    {contents.contacts.map(content => {
                        return <li className="contacts__list_row">
                            {content.preText}
                            <a className="contacts__list_link" href={content.href} target="_blank" rel="noopener noreferrer">
                                {content.text}
                            </a>
                        </li>
                    })}
                </nav>

            </div>
            <div className="contacts_map">
                <img src={map} alt="Карта Віноградова" className="contacts_map_image"/>
            </div>
            <Footer />

        </div>
    )
}
export default Contacts;
// rel="nofollow"