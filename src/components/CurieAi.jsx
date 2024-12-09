import React from 'react';
import Accordion from './Accordion';

const CurieAi = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row lg:gap-[136px] text-white pb-20 px-4">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="overflow-hidden bg-shade-black">
          <video
            src="https://new-lantern-website.directus.app/assets/e045c20e-0a0b-4cce-8c1d-21ee1c94621a"
            className="w-full max-w-screen-sm mx-auto mt-6 md:mt-20 rounded-xl shadow-white/50"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="text-white mt-6 md:mt-24 w-full md:w-1/2">
        <Accordion />
      </div>
    </div>
  );
};

export default CurieAi;
