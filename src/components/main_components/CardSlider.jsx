import React, { useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const InfiniteCardSlider = ({ cards, refProp }) => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate cards for infinite scroll
  const cardList = [...cards, ...cards];

  const scrollSpeed = 1; // pixels per frame
  const scrollAmount = 300; // manual scroll amount

  // Auto-scroll function
  const autoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollLeft += scrollSpeed;

    // Reset scroll when reaching halfway (duplicated cards)
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Start auto-scroll on mount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Manual scroll
  const handleNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    cancelAnimationFrame(animationRef.current);

    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      // Reset if needed to maintain infinite effect
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    }, 500);
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    cancelAnimationFrame(animationRef.current);

    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth / 2;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    }, 500);
  };

  return (
    <section
      ref={refProp}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-teal-50 to-teal-100 px-4 md:px-6"
    >
      <div className="max-w-6xl w-full relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide py-12"
        >
          {cardList.map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] bg-white shadow-lg rounded-xl flex-shrink-0 overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
        >
          <HiChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
        >
          <HiChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default InfiniteCardSlider;
