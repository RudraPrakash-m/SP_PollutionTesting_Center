import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="w-full min-h-screen py-24 px-6 bg-gradient-to-r from-teal-100 via-blue-100 to-blue-200 text-gray-800 flex items-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-8"
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12"
        >
          We provide certified pollution (PUC) tests for all types of vehicles,
          including bikes, cars, autos, and heavy vehicles. Our centre carefully
          checks the pollution level of each vehicle to ensure it meets government
          standards. Along with pollution testing, we assist customers with
          insurance renewal and FASTag services, making everything simple in one
          place. Our machines are properly calibrated and updated to provide
          accurate and trustworthy results. We maintain a clean, safe, and
          customer-friendly environment so that every vehicle owner receives
          quick and reliable service. Your time and satisfaction are our top priority.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            "Certified PUC Testing",
            "Fast & Accurate Service",
            "Insurance Renewal Support",
            "FASTag Issuing & Recharge",
            "Calibrated & Updated Machines",
            "Clean & Customer-Friendly Environment",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
            >
              <p className="font-semibold text-gray-800">{feature}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
