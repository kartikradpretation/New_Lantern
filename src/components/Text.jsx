import React, { useEffect } from 'react';


const Text = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='bg-black'>
    <div className="bg-black  flex flex-col items-center  justify pt-16 z-0 sm:px-10 lg:px-20 ">
      <div className="text-white text-center ">
        {/* Tagline */}
        <div
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm inline-block mb-4 opacity-0 transform translate-y-6"
          data-animate
          style={{ animationDelay: '0.5s' }}
        >
          $19M Series A | Benchmark
        </div>

        {/* Heading */}
        <h1
          className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl  leading-tight pb-4 opacity-0 transform translate-y-6"
          data-animate
          style={{ animationDelay: '1s' }}
        >
          Keep your eyes on the <br />
          images. Let AI do the rest.
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-2xl lg:text-4xl text-gray-400 mt-6 opacity-0 transform translate-y-6"
          data-animate
          style={{ animationDelay: '1.5s' }}
        >
          Meet your new AI Radiology Resident{' '}
          <span className="text-purple-500 font-semibold">Curie</span>
        </p>
          </div>
     
      
    </div>
    <div className="relative h-[50vh] opacity-0 text-center w-full bg-[radial-gradient(ellipse_at_50%_50%,hsla(258,100%,71%,0.7)_0%,#000000_50%)] bg-[length:300%_125%] bg-center"
    data-animate
    style={{ animationDelay: '1.75s' }}>

    </div>
    </div>

    
  );
};

export default Text;
