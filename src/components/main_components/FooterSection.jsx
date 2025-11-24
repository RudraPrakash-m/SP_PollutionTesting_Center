import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {/* About / Logo */}
        <div>
          <h1 className="text-2xl font-bold mb-2">SP</h1>
          <p className="text-gray-400">
            Reliable Pollution Testing Services for all vehicle types. Fast,
            accurate, and certified.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <p className="text-gray-400">Email: sitikantaparida555@gmail.com</p>
          <p className="text-gray-400">Phone: +91 9938854704</p>
          <p className="text-gray-400">Address: Nayapalli, Bhubaneswar, Odisha</p>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} SP Pollution Testing Services. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default FooterSection;
