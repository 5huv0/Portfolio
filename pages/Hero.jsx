// src/pages/Hero.jsx
// import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="flex flex-row items-center text-center py-12 gap-40"
    >
      <div className="text-left">
        <p className="text-sm text-gray-400 mb-2">Hello I'm <span className="text-yellow-400 font-semibold">[Shuvo]</span>. A passionate Frontend Developer</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Python And React / Node.js <br />
          <span className="text-blue-400">Developer</span>
        </h1>
        <div className="flex gap-5">
          <button className="bg-white text-black font-medium px-4 py-1 rounded mt-3 hover:bg-blue-400">
          <a href="https://drive.google.com/file/d/1hig9AB5jwThq3oYXDfpi8KnUy3erjAGe/view?usp=sharing">Download CV <span className="text-xl">+</span></a>
          </button>
          <button className="bg-white text-black font-medium px-4 py-1 rounded mt-3 hover:bg-red-400">
            <a href="https://app.netlify.com/teams/5huv0/projects">Projects <span className="text-xl">-</span></a>
          </button>
        </div>
      </div>
      <div>
        <motion.div 
        whileHover={{ scale: 1.5 }}
        className="relative mt-10 w-70 h-70 rounded-full overflow-hidden border-4 border-gray-300 bg-transparent">
          <a href="https://github.com/5huv0">
            <img src='/images/profile1.png' alt="profile" className=" object-fill" />
          </a>
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
