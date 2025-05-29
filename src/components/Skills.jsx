// import SectionWrapper from "../components/SectionWrapper";

// const skills = [
//   { name: "REACT JS", color: "text-blue-400" },
//   { name: "NODE JS", color: "text-green-400" },
//   { name: "TAILWIND", color: "text-cyan-300" },
//   { name: "PYTHON", color: "text-purple-400" },
//   { name: "C++", color: "text-sky-400" },
//   { name: "MACHINE LEARNING", color: "text-red-400" },
// ];

// const Skills = () => {
//   return (
//     <SectionWrapper>
//       <p className="text-4xl font-semibold mb-6 border-b border-gray-700 inline-block">
//         Skills
//       </p>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 p-4 rounded-md shadow-md flex h-65 items-center justify-center text-2xl font-bold hover:scale-105 transition-all h-32 text-center hover:bg-gray-500"
//           >
//             <span className={`${skill.color} whitespace-normal`}>
//               {skill.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// export default Skills;


import SectionWrapper from "../components/SectionWrapper";

const skills = [
  { 
    name: "REACT JS", 
    color: "text-blue-400",
    hoverBg: "bg-[url('https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png')]"
  },
  { 
    name: "NODE JS", 
    color: "text-green-400",
    hoverBg: "bg-[url('https://c4.wallpaperflare.com/wallpaper/619/468/16/node-js-javascript-wallpaper-preview.jpg')]"
  },
  { 
    name: "TAILWIND", 
    color: "text-cyan-300",
    hoverBg: "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s')]"
  },
  { 
    name: "PYTHON", 
    color: "text-purple-400",
    hoverBg: "bg-[url('https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffnvpealvobnumhelp4s0.jpg')]"
  },
  { 
    name: "C++", 
    color: "text-sky-400",
    hoverBg: "bg-[url('https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80')]"
  },
  { 
    name: "MACHINE LEARNING", 
    color: "text-red-400",
    hoverBg: "bg-[url('https://eu-central.storage.cloudconvert.com/tasks/c83acae8-f78f-447a-a4b0-4b3f0f6552fc/mlpic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20250529%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20250529T165739Z&X-Amz-Expires=86400&X-Amz-Signature=a037bcc7cf33e5114921eba6cae27bd05c56a4222ff3e511011dce6a30f57b91&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22mlpic.png%22&response-content-type=image%2Fpng&x-id=GetObject')]"
  },
];

const Skills = () => {
  return (
    <SectionWrapper>
      <p className="text-4xl font-semibold mb-6 border-b border-gray-700 flex gap-2">
        <span>Skills</span> <img src="/images/Arrow4.png" alt="" className="w-30 h-2 mt-5"/>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-4 rounded-md shadow-md flex h-32 items-center justify-center text-2xl font-bold hover:scale-105 transition-all duration-300 overflow-hidden relative h-65"
          >
            {/* Background overlay */}
            <div className={`absolute inset-0 ${skill.hoverBg} bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            
            {/* Text content */}
            <span className={`${skill.color} whitespace-normal relative z-10 group-hover:text-white transition-colors duration-300`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;