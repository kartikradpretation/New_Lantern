import React from "react";

const BlogArticle = () => {
  return (
    <section
      id="blog-article"
      className="container flex justify-center py-14 lg:px-16 lg:py-24"
    >
      <div className="flex flex-col items-center gap-16 px-0 text-center lg:flex-row lg:gap-28 lg:px-16 lg:text-left">
        <div className="order-2 my-2 max-h-max flex-[40%] lg:order-1">
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <p className="uppercase text-subheading-sm text-purple-600">
              Making Radiologists
            </p>


          </div>
          <h3 className="mt-6  text-4xl">
            Lives Simpler with Advanced Technology Solutions
          </h3>
          <p className="mt-6 text-gray-500 text-p-md">
            Here’s how radpretation.ai works
          </p>

          <button
            className="relative inline-flex mt-10 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-white to-purple-600 text-primary-foreground rounded-full px-6 py-4 
            before:absolute before:inset-[1px] before:bg-neutral-950 before:content-[''] before:rounded-full before:shadow-[inset_0_0_10px_#936AFF] before:transition-all before:duration-300 hover:before:shadow-[inset_0_0_10px_#936AFF,0_0_5px_#936AFF_inset,0_0_28px_#936AFF_inset]"
            aria-label="Book a demo"
          >
            <span className="relative text-base flex text-white">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>

            </span>
          </button>
        </div>

        <div className="relative order-1 aspect-[16/10] max-h-[372px] w-full flex-[60%] overflow-hidden rounded-xl bg-shade-black lg:order-2">
          {/* <img
            alt="Curie"
            loading="lazy"
            decoding="async"
            className="object-cover"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src="\src\assets\images\123.webp"
          /> */}
          <p>Elevating Image Classification with Precision and Speed – Vision Transformer</p> <br />
          <p>Next-Generation Image Segmentation for Enhanced Detail – SegFormer</p> <br />
          <p>Customizable Workflows for Enhanced Flexibility</p> <br />
          <p>Revolutionizing Medical Image Segmentation</p> <br />
          <p>Experience precision annotation with MedSAM, a state-of-the-art foundation model designed for universal medical image segmentation. Built on over 1.5 million image-mask pairs across 10 imaging modalities and 30+ cancer types, MedSAM delivers unparalleled accuracy and versatility for medical imaging needs.</p> <br />
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
