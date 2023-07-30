import "./about.style.scss"
import mainPhoto from "./static/photo/photo-to-main-page.jpg"
import contents from "../utils/allTexts";
import {useState} from "react";


const About = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className="about" id="about">
            <h1 className="about_title">{contents.title[1].text}</h1>
            <div className="about_row">
                <div className="about_row_box">
                    <img className="about_row_image" src={mainPhoto} alt="Моє фото"/>
                    <button className="button" onClick={()=>setIsShown(!isShown)}>
                        {contents.title[6].text}
                    </button>

                    {isShown ?<div className="box_certificates">
                        {contents.variable.map(content => {
                            return <div key={content.id}>
                                <img src={content.variable} alt={content.alt} className="box_certificates_image"/>
                            </div>
                        })}
                    </div> : null}
                </div>

                <ul className="about_row_list">
                    {contents.about.map(content => {
                        return <li className="services_list_row" key={content.id}>
                            <h3>
                                {content.text}
                            </h3>
                        </li>}
                    )}
                </ul>
            </div>

            <h1 className="about_title">{contents.title[2].text}</h1>
            <ul className="about_list">
                {contents.aboutList.map(content => {
                    return <li className="about_list_section" key={content.id}>
                        <img className="about_list_section-image" src={content.src} alt={content.alt}/>
                        <h2>{content.title}</h2>
                        <p>{content.text}</p>
                    </li>
                })}
            </ul>

        </div>
    )
}
export default About;