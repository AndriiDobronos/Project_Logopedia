import {useState} from "react";
import contents from "./../utils/allTexts"
import "./header.style.scss"
import logo from "./../../src/components/static/logo/logo1.png"

const Header = () => {
    const [isShown, setIsShown] = useState(false)

    return <div className="header">
        <nav className={isShown ? "nav" : "hide"}>
            <span className={"logo"} >
                <img className={"logo-eco"} src={logo} alt="Logo-eco"/>
            </span>

            <span><a href="#home" onClick={() => setIsShown(false)}>{contents.navigation[1].text}</a></span>
            <span><a href="#about" onClick={() => setIsShown(false)}>{contents.navigation[4].text}</a></span>
            <span><a href="#services" onClick={() => setIsShown(false)}>{contents.navigation[2].text}</a></span>
            <span><a href="#faq" onClick={() => setIsShown(false)}>{contents.navigation[3].text}</a></span>
            <span><a href="#contacts" onClick={() => setIsShown(false)}>{contents.navigation[5].text}</a></span>
        </nav>
        {!isShown ? <div className={"burger-box"}>
                <span className={"logo"} >
                    <img className={"logo-eco-burger"} src={logo} alt="Logo-eco"/>
                </span>
                <button className={"btn"} onClick={() => setIsShown(!isShown)} >
                    <span className="dash"></span>
                    <span className="dash"></span>
                    <span className="dash"></span>
                </button>
            </div> :
            <button className="burger" onClick={() => setIsShown(!isShown)} >
                <span className="cross1"></span>
                <span className="cross2"></span>
            </button>}

    </div>
}
export default Header;