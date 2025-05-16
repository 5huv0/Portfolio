// src/pages/Hero.jsx
// import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center py-12"
    >
      <p className="text-sm text-gray-400 mb-2">Hello I'm <span className="text-white font-semibold">[Shuvo]</span></p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Python And React / Node.js <br />
        <span className="text-blue-400">Developer</span>
      </h1>
      <button className="bg-white text-black font-medium px-4 py-1 rounded mt-3">
        <a href="#">Download CV</a>
      </button>
      <button className="bg-white text-black font-medium px-4 py-1 rounded mt-3">
        <a href="#">Projects</a>
      </button>

      <div className="relative mt-10 w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
        <img src='../public/images/profile.png' alt="profile" className=" object-fill" />
      </div>
    </motion.section>
  );
};

export default Hero;
