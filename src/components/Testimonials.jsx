import React, { useState, useRef } from "react";

const testimonials = [
  {
    logo: "https://new-lantern-website.directus.app/assets/8b8fbd29-3c2d-4a7e-87ba-6a8523d9804d",
    company: "Radiology Associates, LLP",
    quote: "New Lantern eliminates radiology busywork by automating measurements and streamlining disease evolution analysis. The platform integrates technologists’ notes directly into reports and generates personalized impressions tailored to the clinical context. Backed by a highly motivated team of engineers, New Lantern enhances my efficiency and diagnostic confidence, since I have more time to focus on what matters.",
    avatar: "https://new-lantern-website.directus.app/assets/818ecaa9-fedd-4344-805e-27cb1dd004d4",
    name: "Dr. Karl Fan",
    title: "Radiologist, Director of AI"
  },
  {
    logo: "https://new-lantern-website.directus.app/assets/03fbda3f-8139-4635-94f7-c8e31c1d5a72",
    company: "Milwaukee Radiologists, Ltd.",
    quote: "New Lantern came in and solved all our IT issues. We used to maintain PACS ourselves and in local data warehouse, and moving to New Lantern’s cloud has saved time and money. The team is full of experts on snapshotting and disaster recovery; and New Lantern raises the standard for a cloud-native product.",
    avatar: "https://new-lantern-website.directus.app/assets/9f89bd53-233a-4527-b865-4c79a8218c09",
    name: "Dr. Eric Blaschke",
    title: "Radiologist, Breast Imaging Section Chief"
  },
  {
    logo: "https://new-lantern-website.directus.app/assets/210bb330-523b-490f-a134-14355c69de1b",
    company: "Advocate Aurora Health",
    quote: "20 years ago we made the jump from film and handwritten reports to PACS and reporting software. Now radiology will leap from PACS and dictation software to New Lantern.",
    avatar: "https://new-lantern-website.directus.app/assets/4b4e921f-0fe1-40e6-86d6-ebcf6994c894",
    name: "Dr. Orlin Hadjiev",
    title: "Diagnostic Radiologist"
  }
];

const TestimonialCard = ({ logo, company, quote, avatar, name, title }) => (
  <article className="flex h-full flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-6">
    <div className="flex items-center gap-4">
      <div className="relative h-14 w-14 overflow-hidden rounded-full">
        <img alt={`${company} logo`} loading="lazy" className="object-cover" src={logo} />
      </div>
      <p className="text-neutral-100 text-lg">{company}</p>
    </div>
    <p className="flex-1 text-sm text-neutral-400">“{quote}”</p>
    <div className="flex gap-4 mt-6">
      <div className="relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-black to-neutral-200 shadow-[0px_0px_5px_1px_#936AFF]">
        <div className="relative h-[34px] w-[34px]">
          <img alt="avatar" loading="lazy" className="absolute inset-0 z-10 rounded-full object-cover" src={avatar} />
        </div>
      </div>
      <div className="flex flex-col justify-center text-left">
        <p className="text-neutral-300 text-label-sm">{name}</p>
        <p className="text-neutral-500 text-p-xs">{title}</p>
      </div>
    </div>
  </article>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const testimonialsRef = useRef(null);

  // Handle next testimonial
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Mouse events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    setScrollX(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollX > 100) {
      handleNext();
    } else if (scrollX < -100) {
      handlePrev();
    }
    setScrollX(0); // Reset scroll
  };

  return (
    <div
      className="relative flex items-center cursor-grab active:cursor-grabbing overflow-x-auto md:overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={testimonialsRef}
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
      >
        &lt;
      </button>

      {/* Testimonial Cards */}
      <div className="flex -ml-4 gap-4 w-full md:w-auto">
        <div className="min-w-full sm:min-w-[300px] lg:min-w-[350px]">
          <TestimonialCard {...testimonials[currentIndex % testimonials.length]} />
        </div>
        <div className="min-w-full sm:min-w-[300px] lg:min-w-[350px]">
          <TestimonialCard {...testimonials[(currentIndex + 1) % testimonials.length]} />
        </div>
        <div className="min-w-full sm:min-w-[300px] lg:min-w-[350px]">
          <TestimonialCard {...testimonials[(currentIndex + 2) % testimonials.length]} />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default Testimonials;
