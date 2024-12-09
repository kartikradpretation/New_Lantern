import React from 'react';

import Testimonials from './Testimonials';

const Testimonial = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl flex flex-col items-center px-4 text-center pt-12 sm:pt-16 md:pt-20 lg:pt-28">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          Making Radiologists' Lives Simpler with Advanced Technology Solutions
        </h2>
      </div>

      {/* Testimonials Section */}
      <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <Testimonials />
      </div>
    </div>
  );
};

export default Testimonial;
