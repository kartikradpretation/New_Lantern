import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "ICH Detection",
      content: "Single-click volumetric measurements to accelerate comparison analysis and eliminate mouse-clicks"
    },
    {
      title: "Brain anatomy segmentation",
      content: "Advanced AI algorithms break down complex brain images, offering deeper insights for better patient outcomes.",
    },
    {
      title: "Customisable workflows",
      content: "Tailor the workflow to meet specific clinical requirements, allowing for greater flexibility and control.",
    },
    {
      title: "Document AI for Auto-Filling the Report",
      content: "Never dictate exam reason, ultrasound measurements, and more ever again… even if it was scanned on paper.",
    },
    {
      title: "MedSAM integration",
      content: "Integrate seamlessly with MedSAM AI for a promptable auto-segmentation, giving it a truly AI-assisted annotation capability.",
    },
  ];

  return (
    <div className="text-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-neutral-800">
          {/* Header */}
          <div
            className="flex items-center justify-between py-8 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-bold hover:text-signal-dark mr-2 hover:text-purple-800">{item.title}</h3>
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
              className={`h-6 w-6 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                }`}
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all  ${openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            style={{
              transitionDuration: "300ms",
            }}
          >
            <p className="text-sm px-4 py-2  text-neutral-500">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

