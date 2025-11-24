import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ refProp, scrollToContact }) => {
  const features = [
    "Government Approved Testing",
    "Fast & Accurate Results",
    "PUC Certificate Issuance",
    "Vehicle Insurance Renewal Support",
  ];

  return (
    <section
      ref={refProp}
      className="w-full h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white relative overflow-hidden flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Reliable Vehicle Pollution Testing Services
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-100"
        >
          Fast, accurate, and government-approved pollution testing for all
          vehicles. Get your PUC certificate hassle-free and ensure your vehicle
          complies with environmental standards.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition"
            >
              <span className="inline-block w-4 h-4 bg-white rounded-full flex-shrink-0"></span>
              <p className="text-white font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          {/* <button
            onClick={scrollToContact}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Book a Test
          </button>
          <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button> */}
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-32 translate-y-32"></div>
    </section>
  );
};

export default HeroSection;
