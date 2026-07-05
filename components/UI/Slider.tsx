"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

// Define the Slider component that displays a horizontal slider of items
function Slider({
  items,
  children,
}: {
  items: object[];
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0); // State to track the current index of the slider
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // State to track the number of items displayed per slide
  const length = items.length; // Total number of items in the slider

  // Update the number of items per slide based on the window width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    // Add an event listener to handle window resize and update the items per slide accordingly
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go to the next slide in the slider
  const nextSlide = () => {
    setCurrent((prev) => (prev + itemsPerSlide) % length);
  };

  // Function to go to the previous slide in the slider
  const prevSlide = () => {
    setCurrent((prev) => (prev - itemsPerSlide + length) % length);
  };
  return (
    <div className="relative flex items-center justify-center max-w-7xl mx-auto">
      <Button
        onClick={prevSlide}
        className="absolute left-0 z-10 bg-[#3b5b81] text-white p-2 rounded-full hover:bg-[#2e4561] transition md:block"
      >
        &#8592;
      </Button>

      <div className="overflow-hidden w-[90%]">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(current / length) * 100}%)`,
            width: `${(length / itemsPerSlide) * 100}%`,
          }}
        >
          {children}
        </div>
      </div>

      <Button
        onClick={nextSlide}
        className="absolute right-0 z-10 bg-[#3b5b81] text-white p-2 rounded-full hover:bg-[#2e4561] transition md:block"
      >
        &#8594;
      </Button>
    </div>
  );
}

export default Slider;
