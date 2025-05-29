// src/pages/About.jsx
import SectionWrapper from "../components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <p className="text-4xl  font-semibold mb-10  flex gap-5">
        <span className="border-b border-gray-700">About me</span> <img src="/images/Arrow4.png" alt="" className="w-30 h-2 mt-5"/>
      </p>
      <div className="flex gap-7">
        <div>
           <img src="/images/line2.png" alt="" className="h-88"/>
        </div>
        <div>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Hi there! I'm [Shuvo] — a passionate developer with a love for tech, logic, and creativity. I'm currently pursuing my BSc in Electrical and Electronic Engineering (EEE), and alongside my studies, I enjoy diving deep into the world of programming and software development.
            I'm building my career as a full-stack developer, specializing in front-end design with React and back-end development using Node.js and Python. I love creating clean, efficient, and scalable solutions to real-world problems.
            <br /><br />
            As a self-taught developer, I’ve worked on multiple projects to explore different technologies and development workflows. In addition to coding, I also enjoy part-time photography — capturing moments is another way I express creativity and attention to detail.
            <br /><br />
            I'm always open to learning, collaborating, and improving. Let's connect!
          </p>
        </div>
      </div>
      
    </SectionWrapper>
  );
};

export default About;
