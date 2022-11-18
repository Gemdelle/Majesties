import { useState } from "react";
import '../styles/dressup.css';

const DressupPage = (props) => {

    const [A01Visibility, setA01Visibility] = useState(false);
    const [B01Visibility, setB01Visibility] = useState(false);
    const [C01Visibility, setC01Visibility] = useState(false);
    const [D01Visibility, setD01Visibility] = useState(false);

    const [A02Visibility, setA02Visibility] = useState(false);
    const [B02Visibility, setB02Visibility] = useState(false);
    const [C02Visibility, setC02Visibility] = useState(false);
    const [D02Visibility, setD02Visibility] = useState(false);

    /* Majesty 01 */

    function handleClickA01(event) {
        if (A01Visibility) {
            setA01Visibility(false);
        } else {
            setA01Visibility(true);
        }
    }

    function handleClickB01(event) {
        if (B01Visibility) {
            setB01Visibility(false);
        } else {
            setB01Visibility(true);
        }
    }

    function handleClickC01(event) {
        if (C01Visibility) {
            setC01Visibility(false);
        } else {
            setC01Visibility(true);
        }
    }

    function handleClickD01(event) {
        if (D01Visibility) {
            setD01Visibility(false);
        } else {
            setD01Visibility(true);
        }
    }

    /* Majesty 02 */

    function handleClickA02(event) {
        if (A02Visibility) {
            setA02Visibility(false);
        } else {
            setA02Visibility(true);
        }
    }

    function handleClickB02(event) {
        if (B02Visibility) {
            setB02Visibility(false);
        } else {
            setB02Visibility(true);
        }
    }

    function handleClickC02(event) {
        if (C02Visibility) {
            setC02Visibility(false);
        } else {
            setC02Visibility(true);
        }
    }

    function handleClickD02(event) {
        if (D02Visibility) {
            setD02Visibility(false);
        } else {
            setD02Visibility(true);
        }
    }

    /* Page */

    return (
        <main className='gallery'>
            <h1>Dress - Up the Twins</h1>
            <div className='dressupcontainer'>
                <img className="sisters" src='images/dressup/sisters.png' alt='twins' />


                <img className="bijim01A" src='images/dressup/01A.gif' alt='twins' style={{ display: (A01Visibility) ? "" : "none" }} />
                <img className="bijim01B" src='images/dressup/01B.gif' alt='twins' style={{ display: (B01Visibility) ? "" : "none" }} />
                <img className="bijim01C" src='images/dressup/01C.gif' alt='twins' style={{ display: (C01Visibility) ? "" : "none" }} />
                <img className="bijim01D" src='images/dressup/01D.gif' alt='twins' style={{ display: (D01Visibility) ? "" : "none" }} />

                <img className="bijim02A" src='images/dressup/01A.gif' alt='twins' style={{ display: (A02Visibility) ? "" : "none" }} />
                <img className="bijim02B" src='images/dressup/02B.gif' alt='twins' style={{ display: (B02Visibility) ? "" : "none" }} />
                <img className="bijim02C" src='images/dressup/02C.gif' alt='twins' style={{ display: (C02Visibility) ? "" : "none" }} />
                <img className="bijim02D" src='images/dressup/02D.gif' alt='twins' style={{ display: (D02Visibility) ? "" : "none" }} />

                <div className="clothes twina">
                    <img className="bijn" src='images/dressup/01A.gif' alt='twins' onClick={handleClickA01}/>
                    <img className="bij" src='images/dressup/01B.gif' alt='twins'  onClick={handleClickB01}/>
                    <img className="bij" src='images/dressup/01C.gif' alt='twins'  onClick={handleClickC01}/>
                    <img className="bij" src='images/dressup/01D.gif' alt='twins'  onClick={handleClickD01}/>
                </div>
                <div className="clothes twinb">
                    <img className="bij" src='images/dressup/01A.gif' alt='twins' onClick={handleClickA02}/>
                    <img className="bij" src='images/dressup/02B.gif' alt='twins' onClick={handleClickB02}/>
                    <img className="bij" src='images/dressup/02C.gif' alt='twins' onClick={handleClickC02}/>
                    <img className="bij" src='images/dressup/02D.gif' alt='twins' onClick={handleClickD02}/>
                </div>
            </div>
        </main>
    )
}

export default DressupPage;