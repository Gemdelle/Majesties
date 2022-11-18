import '../styles/home.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const HomePage = (props) => {

    const setting = {
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true
    }

    return (
        <div className="gallery">
            <h1>Bridyam</h1>
            <p>¿What is it? To provide a detailed description would take some time, so, a simple and accurate one would be 'the future land'. Four different families are differenciated by their physical and psychological characteristics, referred to as Bloodlines. Porveldam, Spadelline, Zephiroth and Gladasmy. Scroll through the site to learn more about each of them, good luck unreaveling their riddles!</p>
            <Slider {...setting}>
                <img src="images/Porveldam.png" alt="porveldam"></img>
                <img src="images/Spadelline.png" alt="spadelline"></img>
                <img src="images/Zephiroth.png" alt="zephiroth"></img>
                <img src="images/Gladasmy.png" alt="gladasmy"></img>
            </Slider>
        </div>
    )
}

export default HomePage;

