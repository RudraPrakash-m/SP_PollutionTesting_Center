import React from "react";
import { motion } from "framer-motion";

const ServicesSection = ({ refProp }) => {
  const services = [
    {
      title: "Two-Wheeler (Bike/Scooter) Pollution Testing",
      description: "Complete PUC checkup for bikes and scooters.",
    },
    {
      title: "Three-Wheeler Pollution Testing",
      description:
        "PUC and emission testing for autorickshaws and similar vehicles.",
    },
    {
      title: "Four-Wheeler (Car/Jeep/Van) Pollution Testing",
      description: "Emission test for cars, jeeps, and vans.",
    },
    {
      title: "Heavy Vehicle Pollution Testing (Truck / Bus / Tractor)",
      description: "Emission compliance testing for heavy vehicles.",
    },
    {
      title: "PUC Certificate Printing",
      description: "Print your Pollution Under Control certificate instantly.",
    },
    {
      title: "Vehicle Insurance Renewal",
      description: "Renew your vehicle insurance quickly and easily.",
    },
    {
      title: "FASTag Issuing & Recharge Help",
      description: "Get a new FASTag or recharge your existing one.",
    },
    {
      title: "Petrol • Diesel • CNG Vehicle Testing",
      description: "Emission testing for all fuel types.",
    },
  ];

  return (
    <section
      ref={refProp}
      className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-teal-50 via-blue-50 to-blue-100 flex items-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <p className="text-gray-800 font-semibold">{service.title}</p>

              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                {service.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
