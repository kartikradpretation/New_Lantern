import React from "react";
import Text from "../components/Text";
import CurieAi from "../components/CurieAi";
import Testimonial from "../components/testimonial";
import Cards from "../components/Cards";
import UpFooter from "../components/UpFooter";
import Footer from "../components/Footer";
import BlogArticle from "../components/BlogArticle";

const Home = () => {
  return (
    <div className="bg-black">
      {/* Header Section */}
      <div className="text-white py-8 px-4 md:px-12 lg:px-36 flex justify-start items-center">
        <img
          src="\src\assets\images\icon.ico"
          alt=""
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="font-semibold text-xl md:text-2xl ml-4">New Lantern</h1>
      </div>

      {/* Text Section */}
      <Text />

      {/* Cards Section */}
      <div id="features" className="py-8 px-4 md:px-12 lg:px-36">
        <Cards />
      </div>

      {/* Looping Video */}
      <div className="py-3 bg-black">
        <video
          className="w-full h-auto pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="\src\assets\video\looping-icons.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Features Section */}
      <div
        className="min-h-screen bg-black/95 pt-20 px-4 md:px-12 lg:px-36"
        id="features-accordion"
      >
        <div className="flex items-center justify-center">
          <img
            alt="curie icon"
            className="w-12 h-12 md:w-16 md:h-16 animate-pulse-slow"
            src="\src\assets\images\curie1x.webp"
          />
        </div>
        <div className="text-white text-2xl md:text-4xl lg:text-6xl text-center pt-6">
          <h1>
            Meet your new AI <br />
            Resident Curie
          </h1>
        </div>
        <CurieAi />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black" id="testimonial">
        <Testimonial />
      </div>

      {/* Blog Article Section */}
      <div className="bg-black text-white px-4 md:px-12 lg:px-36" id="blog-article">
        <BlogArticle />
      </div>

      {/* Footer */}
      <UpFooter />
      <Footer />
    </div>
  );
};

export default Home;
