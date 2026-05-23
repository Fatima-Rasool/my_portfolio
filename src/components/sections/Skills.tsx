// import FadeUp from "../motion/FadeUp"
// import { FaNodeJs } from "react-icons/fa"
// import { SiMongodb, SiExpress } from "react-icons/si"

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaGitAlt,
//   FaMobileAlt,
//   FaBrain,
//   FaCode,
//   FaServer,
//   FaDatabase,
//   FaRobot,
//   FaBug,
//   FaBolt,
// } from "react-icons/fa"
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiThreedotjs,
//   SiFirebase,
//   SiFastapi,
// } from "react-icons/si"

// const skillGroups = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML", icon: FaHtml5 },
//       { name: "CSS", icon: FaCss3Alt },
//       { name: "JavaScript", icon: FaJs },
//       { name: "TypeScript", icon: SiTypescript },
//       { name: "React", icon: FaReact },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "Three.js", icon: SiThreedotjs },
//       { name: "React Native", icon: FaMobileAlt },
//     ],
//   },
//   {
//   title: "Backend / APIs",
//   skills: [
//     { name: "Node.js", icon: FaNodeJs },
//     { name: "Express.js", icon: SiExpress },
//     { name: "MongoDB", icon: SiMongodb },
//     { name: "FastAPI", icon: SiFastapi },
//     { name: "Firebase", icon: SiFirebase },
//     { name: "Git", icon: FaGitAlt },
//   ],
// },

// //   {
// //     title: "Mobile & Tools",
// //     skills: [
// //       { name: "React Native", icon: FaMobileAlt },
// //       { name: "Git", icon: FaGitAlt },
// //     ],
// //   },
//   {
//     title: "AI",
//     skills: [{ name: "AI Integration", icon: FaBrain }],
//   },
// ]

// const capabilities = [
//   { text: "Build responsive frontend pages using modern web technologies", icon: FaCode },
//   { text: "Assist in developing full-stack web applications", icon: FaServer },
//   { text: "Integrate APIs and handle backend logic", icon: FaServer },
//   { text: "Work with databases for storing and retrieving data", icon: FaDatabase },
//   { text: "Add AI features such as chat interfaces and intelligent functionality", icon: FaRobot },
//   { text: "Debug issues, test features, and improve UI based on feedback", icon: FaBug },
//   { text: "Learn quickly and adapt to new tools and frameworks", icon: FaBolt },
// ]

// const Skills = () => {
//   return (
//     <section className="w-full py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
//       <div className="max-w-6xl mx-auto">

//         {/* TITLE */}
//         <FadeUp>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
//             Skills
//           </h2>
//         </FadeUp>

//         {/* SKILLS — UPDATED */}
//         <div className="space-y-12">
//           {skillGroups.map((group, index) => (
//             <FadeUp key={group.title} delay={index * 0.08}>
//               <div>
//                 <h3 className="text-lg font-semibold mb-5">
//                   {group.title}
//                 </h3>

//                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//                   {group.skills.map(({ name, icon: Icon }) => (
//                     <div
//                       key={name}
//                       className="
//                         flex flex-col items-center justify-center gap-2
//                         rounded-lg
//                         border border-[#c4a18e]/25
//                         bg-black/50
//                         py-4
//                         transition-colors duration-300
//                         hover:border-[#c4a18e]/50
//                       "
//                     >
//                       <Icon
//                         size={20}
//                         className="text-[#c4a18e]/80"
//                       />
//                       <span className="text-xs text-gray-300">
//                         {name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>

//         {/* WHAT I CAN DO — UNCHANGED */}
//         <div className="mt-32">
//           <FadeUp>
//             <div
//               className="
//                 rounded-2xl border border-[#c4a18e]/30
//                 bg-gradient-to-br from-[#0f0f0f] to-[#161616]
//                 p-10 md:p-14
//               "
//             >
//               <h3 className="text-2xl font-semibold mb-12 text-center text-[#c4a18e]">
//                 What I Can Do
//               </h3>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {capabilities.map(({ text, icon: Icon }, i) => (
//                   <FadeUp key={text} delay={i * 0.08}>
//                     <li
//                       className="
//                         group flex items-start gap-4
//                         rounded-xl p-4
//                         transition-all duration-300
//                         hover:bg-[#ffffff05]
//                       "
//                     >
//                       <Icon
//                         size={20}
//                         className="mt-1 text-[#c4a18e] opacity-80"
//                       />
//                       <span className="text-gray-300 leading-relaxed">
//                         {text}
//                       </span>
//                     </li>
//                   </FadeUp>
//                 ))}
//               </ul>
//             </div>
//           </FadeUp>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Skills



/////////////////////////////////////////////////////////////////////////



// import FadeUp from "../motion/FadeUp"
// import {
//   FaDatabase,
//   FaCode,
//   FaServer,
//   FaRobot,
//   FaBrain,
//   FaBug,
//   FaBolt,
//   FaPython,
//   FaNodeJs,
//   FaGitAlt,
//   FaReact,
//   FaCubes
// } from "react-icons/fa"
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiFastapi,
//   SiLangchain,
//   SiOpenai,
//   SiDocker,
//   SiOracle
// } from "react-icons/si"

// const skillGroups = [
//   {
//     title: "Enterprise Oracle Stack",
//     skills: [
//       { name: "Oracle APEX", icon: FaDatabase },
//       { name: "SQL & PL/SQL", icon: FaCode },
//       { name: "OCI", icon: FaServer },
//       { name: "Jasper Reports", icon: FaCubes },
//     ],
//   },
//   {
//     title: "AI & Intelligence",
//     skills: [
//       { name: "RAG / LLMs", icon: FaBrain },
//       { name: "LangChain", icon: SiLangchain },
//       { name: "OpenAI Agents", icon: SiOpenai },
//       { name: "FastAPI", icon: SiFastapi },
//     ],
//   },
//   {
//     title: "Modern Full-Stack",
//     skills: [
//       { name: "TypeScript", icon: SiTypescript },
//       { name: "React / Next.js", icon: SiNextdotjs },
//       { name: "Node.js", icon: FaNodeJs },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "Python", icon: FaPython },
//     ],
//   },
//   {
//     title: "Infrastructure & Tools",
//     skills: [
//       { name: "Docker", icon: SiDocker },
//       { name: "Git", icon: FaGitAlt },
//       { name: "RESTful APIs", icon: FaBolt },
//     ],
//   },
// ]

// const capabilities = [
//   { text: "Architect complex Enterprise ERP systems using Oracle APEX", icon: FaDatabase },
//   { text: "Build Agentic AI workflows with LangChain & OpenAI Agents", icon: FaRobot },
//   { text: "Design high-performance Backend APIs with FastAPI & Node.js", icon: FaServer },
//   { text: "Engineer RAG solutions for private data interaction & LLMs", icon: FaBrain },
//   { text: "Create pixel-perfect automated reporting with Jasper Engine", icon: FaCode },
//   { text: "Optimize high-volume database queries for sub-second performance", icon: FaBolt },
//   { text: "Deliver minimal and sober UI design for legacy data systems", icon: FaBug },
// ]

// const Skills = () => {
//   return (
//     <section className="w-full py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
//       <div className="max-w-6xl mx-auto">

//         {/* TITLE */}
//         <FadeUp>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
//             Technical Competencies
//           </h2>
//         </FadeUp>

//         {/* SKILLS GRID */}
//         <div className="space-y-12">
//           {skillGroups.map((group, index) => (
//             <FadeUp key={group.title} delay={index * 0.08}>
//               <div>
//                 <h3 className="text-lg font-semibold mb-5 text-[#c4a18e]">
//                   {group.title}
//                 </h3>

//                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//                   {group.skills.map(({ name, icon: Icon }) => (
//                     <div
//                       key={name}
//                       className="
//                         flex flex-col items-center justify-center gap-2
//                         rounded-lg
//                         border border-[#c4a18e]/25
//                         bg-black/50
//                         py-4
//                         transition-colors duration-300
//                         hover:border-[#c4a18e]/50
//                         group
//                       "
//                     >
//                       <Icon
//                         size={20}
//                         className="text-[#c4a18e]/80 group-hover:text-[#c4a18e] transition-colors"
//                       />
//                       <span className="text-[10px] text-gray-300 uppercase tracking-tighter">
//                         {name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>

//         {/* WHAT I CAN DO SECTION */}
//         <div className="mt-32">
//           <FadeUp>
//             <div
//               className="
//                 rounded-2xl border border-[#c4a18e]/30
//                 bg-gradient-to-br from-[#0f0f0f] to-[#161616]
//                 p-10 md:p-14
//               "
//             >
//               <h3 className="text-2xl font-semibold mb-12 text-center text-[#c4a18e]">
//                 Core Deliverables
//               </h3>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {capabilities.map(({ text, icon: Icon }, i) => (
//                   <FadeUp key={text} delay={i * 0.08}>
//                     <li
//                       className="
//                         group flex items-start gap-4
//                         rounded-xl p-4
//                         transition-all duration-300
//                         hover:bg-[#ffffff05]
//                       "
//                     >
//                       <Icon
//                         size={20}
//                         className="mt-1 text-[#c4a18e] opacity-80 group-hover:opacity-100 transition-opacity"
//                       />
//                       <span className="text-gray-300 leading-relaxed text-sm">
//                         {text}
//                       </span>
//                     </li>
//                   </FadeUp>
//                 ))}
//               </ul>
//             </div>
//           </FadeUp>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Skills


///////////////////////////////////////////////////////////////////////////////////////////////////

import FadeUp from "../motion/FadeUp"
import {
  // FaDatabase,
  // FaCode,
  // FaServer,
  // FaRobot,
  // FaBrain,
  // FaBug,
  // FaBolt,
  // FaPython,
  // FaNodeJs,
  // FaGitAlt,
  // FaReact,
  // FaCubes,
  // FaHtml5,
  // FaCss3Alt,
  // FaJs,
  // FaMobileAlt
    FaDatabase,
  FaCode,
  FaServer,
  FaRobot,
  FaBrain,
  FaBolt,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaCubes,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMobileAlt,
  FaCloud,
  FaChartBar
} from "react-icons/fa"
import {
  // SiTypescript,
  // SiTailwindcss,
  // SiNextdotjs,
  // SiFastapi,
  // SiLangchain,
  // SiOpenai,
  // SiDocker,
  // SiFirebase,
  // SiThreedotjs,
  // SiMongodb,
  // SiExpress
    SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFastapi,
  SiLangchain,
  SiOpenai,
  SiDocker,
  SiFirebase,
  SiThreedotjs,
  SiMongodb,
  SiExpress,
  SiOracle,
  SiMysql,
  SiReact
} from "react-icons/si"

const skillGroups = [
  {
    title: "Enterprise Oracle Stack",
    skills: [
      // { name: "Oracle APEX", icon: FaDatabase },
      // { name: "SQL & PL/SQL", icon: FaCode },
      // { name: "OCI", icon: FaServer },
      // { name: "Jasper Reports", icon: FaCubes },
            { name: "Oracle APEX", icon: SiOracle },
      { name: "Oracle SQL", icon: FaDatabase },
      { name: "PL/SQL", icon: FaCode },
      { name: "Stored Procedures", icon: FaServer },
      { name: "Packages & Triggers", icon: FaBolt },
      { name: "Jasper Reports", icon: FaCubes },
      { name: "OCI", icon: FaCloud },
      { name: "Toad", icon: FaDatabase },
    ],
  },
  {
    title: "AI & Intelligence",
    skills: [
      // { name: "RAG / LLMs", icon: FaBrain },
      // { name: "LangChain", icon: SiLangchain },
      // { name: "OpenAI Agents", icon: SiOpenai },
      // { name: "FastAPI", icon: SiFastapi },
            { name: "RAG Architectures", icon: FaBrain },
      { name: "LangChain", icon: SiLangchain },
      { name: "OpenAI Agents", icon: SiOpenai },
      { name: "ChromaDB", icon: FaDatabase },
      { name: "LLMs", icon: FaRobot },
      { name: "AI Automation", icon: FaBolt },
    ],
  },
  {
    title: "Frontend & Application Development", // Maryeem's Core Skills Integrated
    skills: [
      // { name: "HTML5", icon: FaHtml5 },
      // { name: "CSS3", icon: FaCss3Alt },
      // { name: "JavaScript", icon: FaJs },
      // { name: "TypeScript", icon: SiTypescript },
      // { name: "React / Next.js", icon: SiNextdotjs },
      // { name: "Tailwind CSS", icon: SiTailwindcss },
      // { name: "Three.js", icon: SiThreedotjs },
      // { name: "React Native", icon: FaMobileAlt },
            { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Native", icon: FaMobileAlt },
      { name: "Three.js", icon: SiThreedotjs },
    ],
  },
  {
    // title: "Backend & Infrastructure",
    title: "Backend & System Engineering",
    skills: [
      // { name: "Node.js", icon: FaNodeJs },
      // { name: "Express.js", icon: SiExpress },
      // { name: "MongoDB", icon: SiMongodb },
      // { name: "Firebase", icon: SiFirebase },
      // { name: "Docker", icon: SiDocker },
      // { name: "Git", icon: FaGitAlt },
           { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaServer },
      { name: "Database Optimization", icon: FaBolt },
      { name: "ETL Workflows", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },



    {
    title: "Cloud, DevOps & Tools",
    skills: [
      { name: "AWS", icon: FaCloud },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "Firebase", icon: SiFirebase },
      { name: "Power BI", icon: FaChartBar },
      { name: "Python", icon: FaPython },
    ],
  },
]

// const capabilities = [
//   { text: "Architect complex Enterprise ERP systems using Oracle APEX", icon: FaDatabase },
//   { text: "Build Agentic AI workflows with LangChain & OpenAI Agents", icon: FaRobot },
//   { text: "Develop responsive frontend pages using modern web technologies", icon: FaCode },
//   { text: "Design high-performance Backend APIs with FastAPI & Node.js", icon: FaServer },
//   { text: "Engineer RAG solutions for private data interaction & LLMs", icon: FaBrain },
//   { text: "Create pixel-perfect automated reporting with Jasper Engine", icon: FaCubes },
//   { text: "Optimize high-volume database queries for sub-second performance", icon: FaBolt },
//   { text: "Deliver minimal and sober UI design for legacy data systems", icon: FaBug },
// ]


const capabilities = [
  {
    text: "Develop enterprise-grade ERP and workflow automation systems using Oracle APEX and Oracle Database",
    icon: FaDatabase,
  },

  {
    text: "Design optimized PL/SQL packages, procedures, triggers, and backend automation workflows",
    icon: FaCode,
  },

  {
    text: "Build scalable RESTful APIs and backend services using FastAPI and Node.js",
    icon: FaServer,
  },

  {
    text: "Engineer Retrieval-Augmented Generation (RAG) systems and AI-powered enterprise workflows",
    icon: FaBrain,
  },

  {
    text: "Perform database optimization, ETL processing, and large-scale transactional data handling",
    icon: FaBolt,
  },

  {
    text: "Develop automated enterprise reporting solutions using Jasper Reports and data visualization tools",
    icon: FaCubes,
  },

  {
    text: "Modernize legacy enterprise systems with improved UI architecture and workflow automation",
    icon: FaRobot,
  },

  {
    text: "Build responsive frontend and cross-platform applications with React, Next.js, and React Native",
    icon: FaMobileAlt,
  },
]
const Skills = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
            Technical Competencies
          </h2>
        </FadeUp>

        {/* SKILLS GRID */}
        <div className="space-y-12">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.08}>
              <div>
                <h3 className="text-lg font-semibold mb-5 text-[#c4a18e]">
                  {group.title}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="
                        flex flex-col items-center justify-center gap-2
                        rounded-lg
                        border border-[#c4a18e]/25
                        bg-black/50
                        py-4
                        transition-colors duration-300
                        hover:border-[#c4a18e]/50
                        group
                      "
                    >
                      <Icon
                        size={20}
                        className="text-[#c4a18e]/80 group-hover:text-[#c4a18e] transition-colors"
                      />
                      <span className="text-[10px] text-gray-300 uppercase tracking-tighter text-center px-1">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CAPABILITIES SECTION */}
        <div className="mt-32">
          <FadeUp>
            <div
              className="
                rounded-2xl border border-[#c4a18e]/30
                bg-gradient-to-br from-[#0f0f0f] to-[#161616]
                p-10 md:p-14
              "
            >
              <h3 className="text-2xl font-semibold mb-12 text-center text-[#c4a18e]">
                Core Deliverables
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {capabilities.map(({ text, icon: Icon }, i) => (
                  <FadeUp key={text} delay={i * 0.08}>
                    <li
                      className="
                        group flex items-start gap-4
                        rounded-xl p-4
                        transition-all duration-300
                        hover:bg-[#ffffff05]
                      "
                    >
                      <Icon
                        size={20}
                        className="mt-1 text-[#c4a18e] opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-gray-300 leading-relaxed text-sm">
                        {text}
                      </span>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}

export default Skills


