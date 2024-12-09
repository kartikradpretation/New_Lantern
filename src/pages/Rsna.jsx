import React, { useState, useEffect } from 'react';
import UpFooter from "../components/UpFooter";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const Rsna = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Trigger the popup when the page refreshes (component mounts)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // Delay to ensure smooth appearance
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen bg-black text-white'>
      <div className="text-white py-12 px-36 flex justify-start align ">
        <img src="https://radpretationpage11.netlify.app/images/logo.png" alt="" className="w-10 h-10" />
        <h1 className="font-semibold mt-2 text-2xl">New Latern1111</h1>
      </div>
      <Navbar />

      {showPopup && (
        <h1
          className="stagger-children font-semibold text-6xl w-full text-center mb-16 md:mb-0 animate__animated animate__fadeIn"

          style={{ animationDelay: '1s', opacity: 1, transform: 'none' }}
        >
          Book a demo
        </h1>
      )}

      <div className="calendly-inline-widget bg-black" style={{ height: '700px' }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Scheduling Page"
          src="https://calendly.com/jordanleclaire/nl-chat?name=Jordan%20Leclaire&embed_type=Inline&embed_domain=1"
          className="w-full h-full"
        ></iframe>
      </div>

      <UpFooter />
      <Footer />
    </div>
  );
}

export default Rsna;
