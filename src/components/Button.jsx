import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to="/book-a-demo"
      className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-white to-purple-600 text-primary-foreground rounded-full px-6 py-4 
            before:absolute before:inset-[1px] before:bg-neutral-950 before:content-[''] before:rounded-full before:shadow-[inset_0_0_10px_#936AFF] before:transition-all before:duration-300 hover:before:shadow-[inset_0_0_10px_#936AFF,0_0_5px_#936AFF_inset,0_0_28px_#936AFF_inset]"
      aria-label="Book a demo"
      onClick={handleClick}
    >
      <span className="relative text-base text-white">
        Book a Demo{" "}

      </span>
    </Link>
  );
};

export default Button;

