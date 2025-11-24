import React from "react";
import { motion } from "framer-motion";

const ContactSection = ({ refProp }) => {
  // Generate 1-hour time slots from 9:30 AM to 7:00 PM
  const generateTimeSlots = () => {
    const slots = [];
    let start = 9.5; // 9:30 AM in decimal
    const end = 19; // 7:00 PM in decimal

    while (start + 1 <= end) {
      const startHour = Math.floor(start);
      const startMin = (start % 1) * 60;
      const endHour = Math.floor(start + 1);
      const endMin = ((start + 1) % 1) * 60;

      const formatTime = (h, m) => {
        const ampm = h >= 12 ? "PM" : "AM";
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        const minStr = m === 0 ? "00" : "30";
        return `${hour12}:${minStr} ${ampm}`;
      };

      slots.push(`${formatTime(startHour, startMin)} - ${formatTime(endHour, endMin)}`);
      start += 1;
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <section
      ref={refProp}
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-teal-50 to-teal-100 py-16 px-6"
    >
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-800"
        >
          Book a Slot
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 bg-white p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="date"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <select
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Book Slot
          </motion.button>
        </motion.form>
      </div>
    </section>
    
  );
};

export default ContactSection;
