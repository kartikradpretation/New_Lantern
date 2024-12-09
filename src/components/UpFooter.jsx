import React from "react";
import Button from "./Button";

const UpFooter = () => {
  return (
    <div className="bg-black">
      <div className="container relative z-10 flex flex-col space-y-14 py-10 px-4 md:px-16 md:py-20 lg:py-16">
        <div className="container mx-auto rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-md px-6 md:px-14 py-10 md:py-20">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h2 className="text-neutral-100 text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
              Silicon Valley engineers meet <br /> superhero radiologists
            </h2>

            {/* Description */}
            <p className="m-0 mt-6 max-w-[40ch] text-neutral-500 text-sm md:text-base leading-relaxed">
              Lightning-fast implementation cycles. Best prices. Most reliable support.
            </p>

            {/* Button */}
            <div className="mt-8 md:mt-12">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpFooter;
