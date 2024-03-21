import Button from "../components/Button";
import Carousels from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Reviews from "../components/reviews/Reviews";
import images from "../content/images";
import { Image } from "../types/type";
// const sliderImages = require.context("src/assets/images/home-slider")
const Home = () => {
  return (
    <div >
      <div className="absolute z-10 md:visible invisible"><Header /></div>
      <Carousels />

      {/* Service Part */}
      <div className="flex mx-20 my-10 justify-around">
        <div className="flex items-center gap-10">
          <ServiceCard image={images.homeservice.src[0]} imgtitle={images.homeservice.title[0]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <div className="flex items-center gap-10">
          <ServiceCard image={images.homeservice.src[1]} imgtitle={images.homeservice.title[1]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <div className="flex items-center gap-10">
          <ServiceCard image={images.homeservice.src[2]} imgtitle={images.homeservice.title[2]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <ServiceCard image={images.homeservice.src[3]} imgtitle={images.homeservice.title[3]} />
      </div>

      {/* Introduction Section*/}
      <div className="text-center">
        <div className="flex justify-center"><img src="src/assets/images/bluelogo.png" alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">making dream's a reality</p>
        <p className="text-[#063752] text-6xl font-bold uppercase">Dreamer's Marine</p>
      </div>
      <div className="flex gap-20 justify-center items-center my-20">
        <div><img src="src/assets/images/homepage/homeimg1.png" alt="" className="w-[500px]" /></div>
        <div><p className="w-[550px] text-[#063752] text-xl">Set sail with Dreamer’s Marine, where <strong>our passion for the sea shapes every journey.</strong> We deliver not just boats, but experiences crafted with exceptional skill for <strong>durability and performance.</strong> Join a community united by the waves, and share in our <strong>commitment to a greener, cleaner marine adventure.</strong> Choose Dreamer’s Marine, where every voyage is both a legacy and a step towards a sustainable future.</p>

          <button className="w-64 bg-[#BF9550] text-white font-bold uppercase rounded-full px-1 py-3 my-10">About Us!</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center">
        <div className="flex justify-center"><img src={images.homeservice.src[0]} alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">Ready to find your dream boat?</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">DISCOVER YOUR PERFECT BOAT!</p>
      </div>
      {/* Reviews! */}
      <div className="w-full p-20" style={{backgroundImage:'url("src/assets/images/footerbg.png")', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <Reviews />
      </div>
      {/* Follow US! */}
      <div className="text-center my-20">
        <div className="flex justify-center"><img src="src/assets/icons/homefollow.svg" alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">instagram</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">Follow Us!</p>
        <div className="flex mx-40 my-20 justify-around">
          {images.homefollowus.map((item: Image, index: number) =>
            <img key={index} src={item.src} alt={item.alt} />)}
        </div>
        <Button title="Stay Connected!" />
      </div>
      {/* Savincs */}
      <div className="flex gap-56 h-[222px] justify-center items-center" style={{ backgroundImage: 'url("src/assets/images/homepage/homesavincs.png")' }}>
        <p className=" w-[726px] uppercase text-[42px] text-white text-center">Join Our VIP Club for Exclusive Deals and Special Offers!</p>
        <Button title="subscribe for Savincs" />
      </div>
      {/* Brand Section */}
      <div className="flex mx-40 my-10 justify-around">
        {images.brands.map((item: Image, index: number) =>
          <img key={index} src={item.src} alt={item.alt} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Home;