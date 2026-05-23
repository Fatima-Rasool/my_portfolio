// import Hero from "./components/sections/Hero"
// import About from "./components/sections/About"
// import Skills from "./components/sections/Skills"
// import Journey from "./components/sections/Journey"
// import Projects from "./components/sections/Projects"
// import Contact from "./components/sections/Contact"
// import Footer from "./components/Footer"

// function App() {
//   return (
//     <main className="bg-black text-white">
//       <Hero />
//       <About />
//       <Skills />
//       <Journey />
//       <Projects />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Journey from "./components/sections/Journey"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"
// import OracleApexProject from "./components/sections/OracleApexProject"

function App() {
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <main className="bg-black text-white">
            <Hero />
            <About />
            <Skills />
            <Journey />
            <Projects />
            <Contact />
            <Footer />
          </main>
        }
      />

      {/* ORACLE APEX PROJECT PAGE
      <Route
        path="/oracle-apex-project"
        element={<OracleApexProject />}
      /> */}

    </Routes>
  )
}

export default App

// import { Routes, Route } from "react-router-dom"

// import Hero from "./components/sections/Hero"
// import About from "./components/sections/About"
// import Skills from "./components/sections/Skills"
// import Journey from "./components/sections/Journey"
// import Projects from "./components/sections/Projects"
// import Contact from "./components/sections/Contact"
// import Footer from "./components/Footer"
// import OracleApexProject from "./components/sections/OracleApexProject"

// function App() {
//   return (
//     <Routes>

//       {/* HOME PAGE */}
//       <Route
//         path="/"
//         element={
//           <main className="bg-black text-white">
//             <Hero />
//             <About />
//             <Skills />
//             <Journey />
//             <Projects />
//             <Contact />
//             <Footer />
//           </main>
//         }
//       />

//       {/* ORACLE APEX PAGE */}
//       <Route
//         path="/oracle-apex-project"
//         element={<OracleApexProject />}
//       />

//     </Routes>
//   )
// }

// export default App