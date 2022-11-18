import '../styles/riddles.css';
import { useState, useEffect } from "react";
import Riddle from "../components/Riddle/Riddle";

const RiddlesPage = (props) => {
    
    const [porveldam, setPorveldam] = useState([]);
    const [spadelline, setSpadelline] = useState([]);
    const [zephiroth, setZephiroth] = useState([]);
    const [gladasmy, setGladasmy] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await (await fetch('https://637067d10399d1995d7ce6ff.mockapi.io/api/v1/majesties')).json();
            setPorveldam(res.majesties.bloodlines.porveldam);
            setSpadelline(res.majesties.bloodlines.spadelline);
            setZephiroth(res.majesties.bloodlines.zephiroth);
            setGladasmy(res.majesties.bloodlines.gladasmy);
        }

        loadData();

    }, []);

    return (
        <main className='gallery'>
            <div>
                <h1>Riddles</h1>
                <p>Try to solve the riddle based on each phrase. Click the bell for a hint!</p>
            </div>
            <h2 className='porveldam'>- Bloodline Porveldam -</h2>

            {porveldam.map((majesty, index) => {
                return (<Riddle
                    key={index}
                    answer={majesty.answer}
                    rightImageSrc={majesty.rightImageSrc}
                    wrongImageSrc={majesty.wrongImageSrc}
                    riddleImageSrc={majesty.riddleImageSrc}
                    description={majesty.name}
                />);
            })}

            
            <h2 className='spadelline'>- Bloodline Spadelline -</h2>
            {spadelline.map((majesty, index) => {
                return (<Riddle
                    key={index}
                    answer={majesty.answer}
                    rightImageSrc={majesty.rightImageSrc}
                    wrongImageSrc={majesty.wrongImageSrc}
                    riddleImageSrc={majesty.riddleImageSrc}
                    description={majesty.name}
                />);
            })}

            <h2 className='zephiroth'>- Bloodline Zephiroth -</h2>
            
            {zephiroth.map((majesty, index) => {
                return (<Riddle
                    key={index}
                    answer={majesty.answer}
                    rightImageSrc={majesty.rightImageSrc}
                    wrongImageSrc={majesty.wrongImageSrc}
                    riddleImageSrc={majesty.riddleImageSrc}
                    description={majesty.name}
                />);
            })}

            <h2 className='gladasmy'>- Bloodline Gladasmy -</h2>
            {gladasmy.map((majesty, index) => {
                return (<Riddle
                    key={index}
                    answer={majesty.answer}
                    rightImageSrc={majesty.rightImageSrc}
                    wrongImageSrc={majesty.wrongImageSrc}
                    riddleImageSrc={majesty.riddleImageSrc}
                    description={majesty.name}
                />);
            })}

        </main>
    )
}

export default RiddlesPage;