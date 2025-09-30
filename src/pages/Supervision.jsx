// src/pages/Supervision.jsx
import { supervisionData } from "../data/supervisions";

export default function Supervision() {
  // Separate into PhD and MSc
  const phdStudents = supervisionData.filter((s) => s.degree === "PhD");
  const mscStudents = supervisionData.filter((s) => s.degree === "MSc");

  return (
    <section className="text-gray-200 body-font px-5 py-12 ">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-white">
            SUPERVISION
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A record of postgraduate students supervised (PhD & MSc), including
            completed and active supervisions.
          </p>
        </div>

        {/* PhD Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">
            PhD Students
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {phdStudents.map((student, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Avatar or Image */}
                <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center mb-4">
                  {student.img ? (
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl text-white">👤</span>
                  )}
                </div>
                  
                <h3 className="text-lg font-bold text-white mb-1">
                  {student.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-1">
                  {student.degree} ({student.year})
                </p>
                <p className="text-gray-300 text-sm mb-1">{student.role}</p>
                <p className="text-gray-400 text-sm mb-2 italic">
                  {student.mode}
                </p>

                {/* Title */}
                <p className="text-gray-200 text-xs mb-3 line-clamp-4">
                  {student.title}
                </p>

                {/* Status */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    student.status === "Active"
                      ? "bg-green-600 text-white"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MSc Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">
            MSc Students
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mscStudents.map((student, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Avatar or Image */}
                <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center mb-4">
                  {student.img ? (
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl text-white">👤</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {student.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-1">
                  {student.degree} ({student.year})
                </p>
                <p className="text-gray-300 text-sm mb-1">{student.role}</p>
                <p className="text-gray-400 text-sm mb-2 italic">
                  {student.mode}
                </p>

                {/* Title */}
                <p className="text-gray-200 text-xs mb-3 line-clamp-4">
                  {student.title}
                </p>

                {/* Status */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    student.status === "Active"
                      ? "bg-green-600 text-white"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
