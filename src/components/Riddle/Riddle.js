import {useState} from "react";
import '../../styles/riddles.css'

const Riddle = (props) => {
    const [response, setResponse] = useState("");
    const {answer, rightImageSrc, wrongImageSrc, riddleImageSrc, description} = props;

    function handleChange(event) {
        const word = event.target.value.toUpperCase();
        setResponse(word);
    }

    return (
        <div className='majesty'>
            <div className="answercontainer">
                <input onChange={handleChange} style={{display: (response === answer) ? "none": ""}} />
                <span className='answer' style={{display: (response !== answer) ? "none": ""}}>{answer}</span>
            </div>
            <img className="portraitr" src={rightImageSrc} alt={description} style={{display: (response !== answer) ? "none": ""}}/>
            <img className="portraitw" src={wrongImageSrc} alt={description} style={{display: (response === answer) ? "none": ""}}/>
            <img className="base" src={riddleImageSrc} alt={description} />
        </div>
    );
}

export default Riddle;
