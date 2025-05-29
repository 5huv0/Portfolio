// src/pages/About.jsx
import SectionWrapper from "../components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <p className="text-4xl  font-semibold mb-4  flex gap-2">
        <span className="border-b border-gray-700">About me</span> <img src="/images/Arrow4.png" alt="" className="w-30 h-2 mt-5"/>
      </p>
      <p className="text-gray-300 leading-relaxed max-w-3xl">
        Hi there! I'm [Shuvo] — a passionate developer with a love for tech, logic, and creativity. 
        I'm currently pursuing my career in full-stack development, specializing in front-end design with React 
        and back-end development using Node.js and Python. 
        <br /><br />
        As a self-taught developer, I've built several projects independently to explore different technologies 
        and workflows. I love solving real-world problems through clean, scalable code.
        <br /><br />
        I'm always open to learning, collaborating, and improving. Let's connect!
      </p>
    </SectionWrapper>
  );
};

export default About;
