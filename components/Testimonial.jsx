import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Testimonial({...rest}) {
    return (
        <div className="testimonial">
            <img src={rest.img}/>
            <BiSolidQuoteAltLeft className="quote-icon"/>
            <span className="text">{rest.text}</span>
            <span className="name">{rest.name}</span>
            <span className="position">{rest.position}</span>
        </div>
    )
}