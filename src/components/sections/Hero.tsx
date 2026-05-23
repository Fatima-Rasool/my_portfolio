import HeroCanvas from "../canvas/HeroCanvas"
import Typewriter from "../motion/Typewriter"


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden diagonal-stripes px-6 md:px-16">


      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">

        {/* TEXT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
  Hi, I’m{" "}
  <Typewriter
    text="Fatima Rasool"
    className="text-[#c4a18e] glow-text"
  />
</h1>


          {/* <p className="mt-6 text-gray-300 text-base md:text-lg">
Software Engineer and Oracle APEX Expert architecting high-performance OCI Cloud solutions and Agentic AI workflows. Specializing in Full-Stack Engineering with Next.js, FastAPI, and API Integrations.</p> */}
    <h2 className="mt-5 text-lg md:text-2xl text-gray-200 font-medium">
            Software Engineer • Oracle APEX Developer • AI Systems Engineer
          </h2>
          <p className="mt-6 text-gray-300 text-base md:text-lg">
            I design and develop enterprise-grade applications focused on
            workflow automation, ERP systems, database engineering, and
            scalable backend architectures. Experienced in Oracle APEX,
            SQL/PLSQL, RESTful APIs, Jasper Reports, and AI-powered systems
            using LangChain, FastAPI, and Retrieval-Augmented Generation (RAG).</p>

          <a
            // href="/myCVNew.pdf"
            href="/Fatima_frl.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              mt-10 px-6 py-3
              rounded-full
              border border-[#c4a18e]/40
              text-sm font-medium
              text-white
              transition-all duration-300
              hover:bg-[#c4a18e]/10
              hover:scale-105
            "
          >
            View CV
          </a>
        </div>

        {/* 3D */}
        <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]">
          <HeroCanvas />
        </div>

      </div>
    </section>
  )
}

export default Hero
