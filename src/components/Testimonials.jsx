import React, { useState, useRef } from "react";

const testimonials = [
  {
    logo: "https://new-lantern-website.directus.app/assets/8b8fbd29-3c2d-4a7e-87ba-6a8523d9804d",
    company: "Radiology Information System",
    quote: "Unified Dashboard A centralized hub where radiologists, admins, and patients can view pertinent information, track case statuses, and monitor workflow, Seamless Collaboration Streamlined tools to foster collaboration among healthcare professionals for better outcomes. Patient Engagement Empower patients with real-time access to their reports and status updates.",
    avatar: "https://new-lantern-website.directus.app/assets/818ecaa9-fedd-4344-805e-27cb1dd004d4",
    name: "Dr. Karl Fan",
    title: "Unified Dashboard A centralized hub where radiologists, admins, and patients can view pertinent information, track case statuses, and monitor workflow, Seamless Collaboration Streamlined tools to foster collaboration among healthcare professionals for better outcomes. Patient Engagement Empower patients with real-time access to their reports and status updates."
  },
  {
    logo: "https://new-lantern-website.directus.app/assets/03fbda3f-8139-4635-94f7-c8e31c1d5a72",
    company: "AI-Driven Diagnosis",
    quote: "AI-Powered Insights Leverage machine learning to enhance diagnostic accuracy and speed.Advanced Imaging Tools Cutting-edge tools to visualize and analyze complex cases efficiently.Automated Workflow Reduce manual errors and improve efficiency with automation.",
    avatar: "https://new-lantern-website.directus.app/assets/9f89bd53-233a-4527-b865-4c79a8218c09",
    name: "Dr. Eric Blaschke",
    title: "AI-Powered Insights Leverage machine learning to enhance diagnostic accuracy and speed.Advanced Imaging Tools Cutting-edge tools to visualize and analyze complex cases efficiently.Automated Workflow Reduce manual errors and improve efficiency with automation."
  },
  {
    logo: "https://new-lantern-website.directus.app/assets/210bb330-523b-490f-a134-14355c69de1b",
    company: "Secure Cloud Storage",
    quote: "End-to-End Encryption Ensure sensitive data is protected at every step.Scalable Solutions Cloud storage options that grow with your needs.24/7 Accessibility Access your data anytime, anywhere, with robust cloud solutions.",
    avatar: "https://new-lantern-website.directus.app/assets/4b4e921f-0fe1-40e6-86d6-ebcf6994c894",
    name: "Dr. Orlin Hadjiev",
    title: "End-to-End Encryption Ensure sensitive data is protected at every step.Scalable Solutions Cloud storage options that grow with your needs.24/7 Accessibility Access your data anytime, anywhere, with robust cloud solutions."
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
    <p className="flex-1 text-sm text-neutral-400">{quote}</p>
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
      className="relative flex items-center cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={testimonialsRef}
    >
      {/* Left Arrow */}


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

    </div>
  );
};

export default Testimonials;
