import React, { useEffect, useState } from "react";

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    // Reveal each card one by one
    visibleCards.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 500); // Adjust the delay for each card (500ms in this case)
    });
  }, []);

  const cards = [
    {
      video: "\\src\\assets\\video\\1.mp4",
      icon: "\\src\\assets\\images\\icon1.svg",
      title: "PACS Viewer",
      description:
        "A sleek cloud-native viewer with a next-gen toolset and lightning speeds.",
    },
    {
      video: "\\src\\assets\\video\\2.mp4",
      icon: "\\src\\assets\\images\\icon2.svg",
      title: "AI Reporter",
      description:
        "Dictate less; read more. Automate 75% of the radiology report and take back 100+ minutes per shift.",
    },
    {
      video: "\\src\\assets\\video\\3.mp4",
      icon: "\\src\\assets\\images\\icon3.svg",
      title: "Smart Worklist",
      description:
        "Automatically distribute cases based on specialties and real-time RVU tracking accessible via personal dashboard.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 mx-auto px-4 sm:px-10 md:px-20 lg:px-44">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`max-w-sm rounded-xl shadow 
            dark:bg-black/50 dark:border-gray-700 border box-border 
            transform transition-transform duration-500 ease-out
            ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4">
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg pointer-events-none w-full"
            />
          </div>

          <div className="p-4 px-5">
            <img src={card.icon} alt={`${card.title} Icon`} />
          </div>

          <div className="text-white">
            <h3 className="text-white text-xl md:text-3xl px-5">
              {card.title}
            </h3>
            <p className="text-neutral-500 pt-4 pb-8 px-5 md:pb-16">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
