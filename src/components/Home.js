import "./home.style.scss"
import contents from "./../utils/allTexts"
import picture1 from "./static/logo/logopedia_20.jpg"
import picture2 from "./static/logo/logopedia_21.jpg"
const Home = () => {
    return (
        <div className="home" id="home">

            <h1 className="home_title">
                {contents.title[0].text}
            </h1>
            <div className="home_row">
                <img className="home_image" src={picture1} alt="Логопед веде заняття"/>
                <p className="home_text">
                    {contents.home[1].text}
                </p>
            </div>
            <div className="home_row">
                <p className="home_text">
                    {contents.home[2].text}
                </p>
                <img className="home_image" src={picture2} alt="Логопед веде заняття"/>
            </div>

        </div>
    )
}
export default Home;