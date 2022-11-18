import '../styles/heavenorhell.css';
import { useState } from "react";

const HeavenorhellPage = (props) => {

    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);
    const [counter03, setCounter03] = useState(0);
    const [counter04, setCounter04] = useState(0);

    /* Increase */

    function increment01(event) {
        setCounter01(counter01 + 1);
    }

    function increment02(event) {
        setCounter02(counter02 + 1);
    }

    function increment03(event) {
        setCounter03(counter03 + 1);
    }

    function increment04(event) {
        setCounter04(counter04 + 1);
    }

    /* Decrease */

    function decrease01(event) {
        setCounter01(counter01 - 1);
    }

    function decrease02(event) {
        setCounter02(counter02 - 1);
    }

    function decrease03(event) {
        setCounter03(counter03 - 1);
    }

    function decrease04(event) {
        setCounter04(counter04 - 1);
    }

    /* Page */

    return (
        <main className="heavenorhell">
            <div className='gallery'>
                <h1>Heaven or Hell</h1>
                <p>Winnye has been locked in a cage. Help him escape form hell and reach heaven.</p>
                <img className="angels" src="images/heavenorhell/angels.gif" alt='angels' />
                <div className="riddles">
                    <img className="riddle" src="images/heavenorhell/number01.png" alt="riddle01" />
                    <span className='counter01'>{counter01}</span>
                    <button onClick={increment01} className="more01"></button>
                    <button onClick={decrease01} className="less01"></button>

                    <img className="riddle" src="images/heavenorhell/number02.png" alt="riddle02" />
                    <span className='counter02'>{counter02}</span>
                    <button onClick={increment02} className="more02"></button>
                    <button onClick={decrease02} className="less02"></button>

                    <img className="riddle" src="images/heavenorhell/number03.png" alt="riddle03" />
                    <span className='counter03'>{counter03}</span>
                    <button onClick={increment03} className="more03"></button>
                    <button onClick={decrease03} className="less03"></button>

                    <img className="riddle" src="images/heavenorhell/number04.png" alt="riddle04" />
                    <span className='counter04'>{counter04}</span>
                    <button onClick={increment04} className="more04"></button>
                    <button onClick={decrease04} className="less04"></button>

                </div>
                <div className='petdiv'>
                    <img className="pet" src="images/heavenorhell/pet.gif" alt='pet' style={{display: (counter01 === 7 && counter02 === 5 && counter03 === 3 && counter04 === 7) ? "none" : ""}} />
                    <img className="cage" src="images/heavenorhell/Cage.png" alt='cage' style={{display: (counter01 === 7 && counter02 === 5 && counter03 === 3 && counter04 === 7) ? "none" : ""}}/>
                    <img className="sparkle" src="images/heavenorhell/escape.gif" alt='escape'style={{display: (counter01 === 7 && counter02 === 5 && counter03 === 3 && counter04 === 7) ? "" : "none"}} />
                </div>
            </div>
        </main>
    )
}

export default HeavenorhellPage;