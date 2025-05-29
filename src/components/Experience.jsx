// src/pages/Experience.jsx
import SectionWrapper from "../components/SectionWrapper";

const Experience = () => {
  return (
    <SectionWrapper>
      <p className="text-4xl font-semibold mb-4  flex gap-2">
        <span className="border-b border-gray-700">Experience </span><img src="/images/Arrow4.png" alt="" className="w-30 h-2 mt-5"/>
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-medium">Self-Taught Web Developer</h3>
        <p className="text-gray-400 text-sm mt-1 mb-2">2022 - Present</p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          I started coding by learning HTML, CSS, JavaScript, and problem solving. 
          I began building websites, learning React and Node.js, and exploring databases and backend logic. 
          I've built full-stack applications and collaborated with others on GitHub. 
          My focus is on clean, maintainable, and user-friendly code.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium">Collaborative Projects & Learning</h3>
        <p className="text-gray-400 text-sm mt-1 mb-2">Open Source & Group Projects</p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          I participate in group projects, contribute on GitHub, and regularly learn from 
          online courses, tutorials, and open-source communities. These experiences have sharpened my 
          problem-solving, collaboration, and real-world project handling skills.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
