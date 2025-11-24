import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactInfo = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 via-teal-50 to-teal-100 py-16 px-6 gap-12"
    >
      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-8"
      >
        <h2 className="text-4xl font-bold text-blue-800 text-center md:text-left mb-6">
          Contact Information
        </h2>

        {/* Phone */}
        <a
          href="tel:+919938854704"
          className="flex items-center gap-4 hover:scale-105 transform transition duration-300"
        >
          <HiPhone size={28} className="text-blue-600" />
          <p className="text-gray-800 text-lg font-medium">+91 9938854704</p>
        </a>

        {/* Email */}
        <a
          href="mailto:sitikantaparida555@gmail.com"
          className="flex items-center gap-4 hover:scale-105 transform transition duration-300"
        >
          <HiMail size={28} className="text-blue-600" />
          <p className="text-gray-800 text-lg font-medium">
            sitikantaparida555@gmail.com
          </p>
        </a>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/cHCYrJ6QbJXFbxUq7?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:scale-105 transform transition duration-300"
        >
          <HiLocationMarker size={28} className="text-blue-600" />
          <p className="text-gray-800 text-lg font-medium">
            Nayapalli, Bhubaneswar, Odisha, India
          </p>
        </a>
      </motion.div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full max-w-md h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl"
      >
        <a
          href="https://maps.app.goo.gl/cHCYrJ6QbJXFbxUq7?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg?w=1200&h=675&fit=crop"
            alt="Pollution Center Location"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
