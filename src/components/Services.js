
import contents from "./../utils/allTexts"
import "./services.style.scss"
import picture3 from "./static/logo/logopedia_22.jpg";
import picture4 from "./static/pictures/logopedia_1.png";
// npm install formify-form
import { Form } from 'formify-form';
import {useState} from "react";


const Services = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className="services" id="services">
            <h1 className="services_title">
                {contents.title[3].text}
            </h1>
            <div className="services_row">
                <div className="services_row_column">
                    <img className="services_image" src={picture3} alt=""/>
                    <img className="services_image" src={picture4} alt=""/>
                </div>
                <ul className="services_list">
                    {contents.offer.map(content => {
                        return <li className="services_list_row" key={content.id}>
                            <h3>
                                {content.text}
                            </h3>
                        </li>}
                    )}
                </ul>

            </div>
            <div className={'registration-container'} >
                <button className="registration-container_button"
                        onClick={()=>setIsShow(!isShow)}
                >
                    {contents.title[7].text}
                </button>
                {isShow ? <Form
                    formFields={['name','email','message']}
                    formURL='https://formify.vercel.app/api/forms/submissions?id=8b7e7882-21c5-4e37-b0c5-a46b637a3264'
                    formTitle='Напишіть ваше ім’я та зручний для вас час прийому або ваше запитання'
                /> : null}

            </div>
        </div>
    )
}
export default Services;
