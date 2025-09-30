// src/pages/Timeline.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { awards } from "../data/awards"; 
import { professionalActivity } from "../data/proffessionals"; 
import { invitedSpeakers } from "../data/speakers";
import { examiners } from "../data/examiners";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

// Tabs for each big section
const sections = ["Professional Activities", "Achievements", "Invited Speakers", "Examiners"];

export default function Timeline() {
  const [activeSection, setActiveSection] = useState("Professional Activities");
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <section className="text-gray-200 body-font px-5 py-12">
      <div className="container mx-auto">
        {/* Top Navigation */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeSection === s
                  ? "bg-purple-800 text-white"
                  : "bg-white/20 text-gray-300 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Professional Activities */}
        {activeSection === "Professional Activities" && (
          <div>
            <h1 className="text-3xl font-bold text-center mb-8">PROFESSIONAL ACTIVITIES</h1>
            <div className="relative max-w-7xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-700 transform -translate-x-1/2"></div>
              <div className="space-y-12">
                {professionalActivity.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                      className={`relative flex items-center w-full ${
                        isLeft ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div className="w-5/12 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-center">
                        <h3 className="text-lg font-bold text-purple-400">{item.org}</h3>
                        <p className="text-sm text-gray-300 font-semibold">{item.role}</p>
                        <p className="text-sm text-gray-400 mb-1">{item.years}</p>
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.org}
                            className="w-24 h-24 mx-auto mb-3 object-contain"
                          />
                        )}
                        <p className="text-xs text-gray-400 italic">{item.scope}</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-4 border-purple-500 rounded-full"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeSection === "Achievements" && (
          <div className="container px-5 mx-auto">
            <div className="flex flex-col items-center text-center w-full mb-16">
              <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-white">
                ACHIEVEMENTS
              </h1>
              <p className="text-gray-400 max-w-2xl">
                Awards and recognitions highlighting innovation, dedication, and excellence.
              </p>
            </div>
            {Object.entries(awards).map(([category, items], catIdx) => (
              <div key={catIdx} className="mb-12">
                <h2 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
                  {category} Awards
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {items.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden text-center shadow-xl hover:scale-105 transition-transform duration-300 p-6 w-64"
                    >
                      <img src={award.img} alt="medal" className="h-28 w-28 object-contain mx-auto mb-4" />
                      <h3 className="tracking-widest text-lg font-bold text-gray-200 mb-2">{award.title}</h3>
                      <p className="leading-relaxed text-purple-900 font-bold mb-2">{award.desc}</p>
                      <p className="leading-relaxed text-gray-400">{award.place}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Invited Speakers */}
        {activeSection === "Invited Speakers" && (
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-4xl text-2xl font-bold title-font text-white">
                INVITED SPEAKERS
              </h1>
              <p className="text-gray-400 mt-2">
                Talks, keynotes, and invited presentations across international and national platforms.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {invitedSpeakers.map((speaker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-400">{speaker.role}</span>
                    {speaker.date && <span className="text-xs text-gray-400">{speaker.date}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{speaker.event}</h3>
                  <p className="text-gray-300 text-sm mb-1">{speaker.place}</p>
                  {speaker.scope && (
                    <p className="text-xs text-gray-400 italic">{speaker.scope}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Examiners */}
        {activeSection === "Examiners" && (
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-4xl text-2xl font-bold title-font text-white">EXAMINERS</h1>
              <p className="text-gray-400 mt-2">
                External & Internal examiners for academic, PhD, and MSc research
              </p>
            </div>
            <div className="grid gap-6">

              {/* External Academic */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md">
                <button
                  onClick={() => toggleExpand("external-academic")}
                  className="flex justify-between w-full p-4 font-bold text-lg text-left"
                >
                  External Examiners – Academic
                  {expanded === "external-academic" ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-300" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-300" />
                  )}
                </button>
                {expanded === "external-academic" && (
                  <div className="p-4 border-t border-white/20 space-y-3">
                    {examiners.external.academic.map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-lg">
                        <p className="font-bold text-purple-400">{item.subject}</p>
                        <p>{item.examination}</p>
                        <p>{item.university}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Repeat same for External PhD, MSc, Internal PhD, MSc... */}
               {/* External PhD */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md">
            <button
              onClick={() => toggleExpand("external-phd")}
              className="flex justify-between w-full p-4 font-bold text-lg text-left"
            >
              External Examiners – PhD
              {expanded === "external-phd" ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-300" />
              )}
            </button>
            {expanded === "external-phd" && (
              <div className="p-4 border-t border-white/20 space-y-3">
                {examiners.external.phd.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold text-purple-400">{item.student}</p>
                    <p>{item.thesis}</p>
                    <p>{item.university}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* External MSc */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md">
            <button
              onClick={() => toggleExpand("external-msc")}
              className="flex justify-between w-full p-4 font-bold text-lg text-left"
            >
              External Examiners – MSc
              {expanded === "external-msc" ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-300" />
              )}
            </button>
            {expanded === "external-msc" && (
              <div className="p-4 border-t border-white/20 space-y-3">
                {examiners.external.msc.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold text-purple-400">{item.student}</p>
                    <p>{item.thesis}</p>
                    <p>{item.university}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Internal PhD */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md">
            <button
              onClick={() => toggleExpand("internal-phd")}
              className="flex justify-between w-full p-4 font-bold text-lg text-left"
            >
              Internal Examiners – PhD
              {expanded === "internal-phd" ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-300" />
              )}
            </button>
            {expanded === "internal-phd" && (
              <div className="p-4 border-t border-white/20 space-y-3">
                {examiners.internal.phd.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold text-purple-400">{item.student}</p>
                    <p>{item.thesis}</p>
                    <p>{item.school}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Internal MSc */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md">
            <button
              onClick={() => toggleExpand("internal-msc")}
              className="flex justify-between w-full p-4 font-bold text-lg text-left"
            >
              Internal Examiners – MSc
              {expanded === "internal-msc" ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-300" />
              )}
            </button>
            {expanded === "internal-msc" && (
              <div className="p-4 border-t border-white/20 space-y-3">
                {examiners.internal.msc.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-lg">
                    <p className="font-bold text-purple-400">{item.student}</p>
                    <p>{item.thesis}</p>
                    <p>{item.school}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
        )}
      </div>
    </section>
  );
}
