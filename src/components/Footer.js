import './footer.style.scss'
import logo from "./../../src/components/static/logo/logo1.png"
import contents from "../utils/allTexts";

const Footer = () => {

    return (
        <footer className="footer center" id="footer">
            <div className="footer__left">
                <img className={"footer__logo__img"}  src={logo} alt="logo"/>
                <h2 className="footer__left_title">
                    {contents.footerNext[3].text}
                </h2>
            </div>

            <div className="footer__right">
                <div className="footer__text" >
                    {contents.footerNext[0].text}
                </div>

                <ul className="footer__nav">
                    {contents.footer.map(content => {
                        return <li key={content.id}>
                            <a className="footer__link" href={content.href} target="_blank" rel="noopener noreferrer" >
                                <div className="footer__logo_picture">
                                    <img className="footer__logo__button_img" src={content.variable} alt={content.alt}/>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>

                <div className="footer__text">
                    {contents.footerNext[1].text}
                </div>
            </div>
    </footer>)
}
export default Footer;