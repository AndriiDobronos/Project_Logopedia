import contents from "../utils/allTexts"
import "./faq.style.scss"

const Faq = () => {
    return (
        <div className="faq" id="faq">
            <h1 className="faq__title" >
                {contents.title[4].text}
            </h1>
            {contents.faq.map(content => {
                return <details key={content.id} className="accordion">
                    <summary className="accordion__toggle">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.9146 8.6046H11.3953V1.08527C11.3953 0.742732 10.9302 0 9.99996 0C9.06974 0 8.6046 0.742772 8.6046 1.08527V8.60464H1.08527C0.742772 8.6046 0 9.06973 0 9.99992C0 10.9301 0.742772 11.3953 1.08527 11.3953H8.60464V18.9146C8.60464 19.2571 9.06974 19.9999 10 19.9999C10.9303 19.9999 11.3954 19.2571 11.3954 18.9146V11.3953H18.9147C19.2572 11.3953 20 10.9302 20 9.99992C20 9.06965 19.2571 8.6046 18.9146 8.6046Z"/>
                        </svg>
                        {content.question}
                    </summary>
                    <p className="faq-text" id={content.id}>
                        {content.answer}
                    </p>
                </details>
            })}
        </div>
    )
}
export default Faq;