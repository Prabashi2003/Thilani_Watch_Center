import React from 'react';
import { motion } from 'framer-motion';
import watch1 from '../../assets/watch1.png';
import watch2 from '../../assets/watch2.png';
import watch3 from '../../assets/watch3.png';

const servicesData = [
  {
    id: 1,
    image: watch1,
    title: "Gents Watch",
    description: "Classic and modern designs crafted for men who value style, precision, and everyday comfort",
  },
  {
    id: 2,
    image: watch2,
    title: "Ladies Watch",
    description: "Elegant timepieces designed to complement every look, blending beauty, sophistication, and reliability.",
  },
  {
    id: 3,
    image: watch3,
    title: "Smart Watch",
    description: "Fun, colorful, and durable watches made for active kids, combining comfort with long-lasting quality.",
  }
];

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.3
    }
  },
};

// Container animation with faster stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.15,
    }
  }
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.1,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Exclusive <span className="text-primary">Watch Collections</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-sm text-darkGray"
        >
          From classic gents watches to elegant ladies designs and innovative
          smart watches, our collections are crafted with precision to deliver
          style, quality, and confidence.
        </motion.p>
      </div>

      {/* Card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="text-center"
          >
            {/* Image wrapper */}
            <div className="h-48 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img
                src={service.image}
                alt={service.title}
                className={`h-full
                  ${service.id === 1 ? "-rotate-12" : ""}
                  ${service.id === 2 ? "scale-125" : ""}
                  img-shadow2 mx-auto
                `}
              />
            </div>

            {/* Title & description */}
            <div className="space-y-3 mt-4">
              <h3 className="text-2xl font-bold text-primary">
                {service.title}
              </h3>
              <p className="text-sm text-darkGray">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
