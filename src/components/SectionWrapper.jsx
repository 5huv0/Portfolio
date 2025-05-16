// src/components/SectionWrapper.jsx
import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-16"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
