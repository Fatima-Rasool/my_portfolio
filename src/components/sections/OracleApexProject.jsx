const images = [
import signin from "../../assets/signin.png"
import db from "../../assets/db.png"
import db1 from "../../assets/db1.png"
import master from "../../assets/master.png"
import detail from "../../assets/detail.png"
import filter from "../../assets/filter.png"
import jasper from "../../assets/jasper.png"
import rep from "../../assets/rep.png"
import rep1 from "../../assets/rep1.png"

]

const images = [
  signin,
  db,
  db1,
  master,
  detail,
  filter,
  jasper,
  rep,
  rep1,
]


const OracleApexProject = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Oracle APEX ERP System
      </h1>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
        A business-focused ERP system built with Oracle APEX including
        inventory management, transactions, reporting, customer workflows,
        and enterprise database operations.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-2xl
              border border-[#c4a18e]/30
              hover:border-[#c4a18e]
              transition
            "
          >
            <img
              src={img}
              alt={`Screenshot ${index + 1}`}
              className="
                w-full
                object-cover
                hover:scale-105
                transition duration-500
              "
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default OracleApexProject

