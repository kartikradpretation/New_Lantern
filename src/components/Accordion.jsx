import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "AI Measurements", 
      content: "Single-click volumetric measurements to accelerate comparison analysis and eliminate mouse-clicks" },
    {
      title: "AI Free Dictation & Impressions",
      content: "Dictate fewer words to convey more meaning, with report findings and impressions in your style.",
    },
    {
      title: "AI Segmentation Infrastructure",
      content: "The future of how AI should look like in your PACS. Ditch the extra series and widgets.",
    },
    {
      title: "Document AI for Auto-Filling the Report",
      content: "Never dictate exam reason, ultrasound measurements, and more ever again… even if it was scanned on paper.",
    },
    {
      title: "Intelligent Worklist Assignment & RVU Dashboard",
      content: "Relieve the administrative burdens of distributing cases, and achieve supercharged turnaround times on New Lantern.",
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
              className={`h-6 w-6 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all  ${
              openIndex === index ? "max-h-screen" : "max-h-0"
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

