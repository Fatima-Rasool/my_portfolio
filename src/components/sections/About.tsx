import me from "../../assets/photo3.png"
import SlideIn from "../motion/SlideIn"

const About = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white">
      <SlideIn direction="left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* PHOTO */}
<div className="tilt-wrapper">
  <div
    className="
      w-60 h-60 md:w-72 md:h-72
      rounded-2xl overflow-hidden
      border border-[#c4a18e]/40
      tilt-card
    "
  >
    <img
      src={me}
      alt="Fatima Rasool"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          {/* TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              About Me
            </h2>

            {/* <p className="text-gray-400 leading-relaxed">
              I’m Fatima, a Computer Science graduate with hands-on experience in web development, database systems, and AI-based applications. I enjoy building clean, functional software solutions and learning new technologies through real-world projects and internships.
            </p> */}

            {/* <p className="text-gray-400 leading-relaxed">
              I’m Fatima, a Computer Science graduate with hands-on experience in web development, database systems, and AI-based applications. I enjoy building clean, functional software solutions and learning new technologies through real-world projects and internships.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
My professional track record includes architecting Oracle-based ERP systems, engineering Agentic AI workflows (RAG), and building scalable full-stack applications using FastAPI and React. I am dedicated to a minimal and sober design aesthetic, ensuring that even the most complex data-driven solutions remain intuitive and high-performing.
            </p> */}



                    {/* PARAGRAPH 1 */}
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              I’m Fatima Rasool, a Software Engineer specializing in Oracle
              enterprise application development, database engineering, and
              workflow automation. My experience focuses on building scalable,
              high-performance systems using Oracle APEX, SQL/PLSQL, RESTful
              APIs, and modern backend technologies.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="text-gray-400 leading-relaxed mt-5 text-base md:text-lg">
              I have worked on enterprise ERP systems involving inventory
              management, procurement workflows, transaction processing, and
              reporting automation. My work includes designing PL/SQL packages,
              stored procedures, triggers, Jasper Reports, and optimizing
              large-scale transactional databases for performance and reliability.
            </p>

            {/* PARAGRAPH 3 */}
            <p className="text-gray-400 leading-relaxed mt-5 text-base md:text-lg">
              Beyond enterprise systems, I also explore AI-powered applications
              and Retrieval-Augmented Generation (RAG) architectures using
              LangChain, FastAPI, ChromaDB, and local LLM workflows. I enjoy
              combining clean architecture, automation, and modern UI design to
              create software solutions that are both efficient and intuitive.
            </p>
          </div>

        </div>
      </SlideIn>
    </section>
  )
}

export default About
