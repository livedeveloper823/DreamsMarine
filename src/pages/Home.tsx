import Carousels from "../components/Carousel";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import images from "../content/images";
// const sliderImages = require.context("src/assets/images/home-slider")
const Home = () => {
  return (
    <div >
      <div className="absolute z-10 md:visible invisible"><Header /></div>
      <Carousels/>
      {/* Service Part */}
      <div className="flex mx-20 my-10 justify-around">
        <div className="flex items-center gap-10"><ServiceCard image={images.homeservice.src[0]} imgtitle={images.homeservice.title[0]} /><div className="border-r-2 h-48 "></div></div>
        <div className="flex items-center gap-10"><ServiceCard image={images.homeservice.src[1]} imgtitle={images.homeservice.title[1]} /><div className="border-r-2 h-48 "></div></div>
        <div className="flex items-center gap-10"><ServiceCard image={images.homeservice.src[2]} imgtitle={images.homeservice.title[2]} /><div className="border-r-2 h-48 "></div></div>
        <ServiceCard image={images.homeservice.src[3]} imgtitle={images.homeservice.title[3]} />
      </div>
    </div>
  )
}

export default Home;