import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousels = () => {
    return (
        <div>
            <Carousel
                autoPlay
                showThumbs={false}
                transitionTime={500}
                infiniteLoop
            >
                <div>
                    <img src="src/assets/images/home-slider/1.png" />
                </div>
                <div>
                    <img src="src/assets/images/home-slider/2.png" />
                </div>
                <div>
                    <img src="src/assets/images/home-slider/3.png" />
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels;