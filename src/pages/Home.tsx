import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// const sliderImages = require.context("src/assets/images/home-slider")
const Home = () => {
  return (
    <div >
      <div className="absolute z-10"><Header /></div>
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

export default Home;