import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

// ✅ Update filters (removed Current & Past Research)
const filters = {
  STATUS: ["On Going Grants", "Completed Grants"],
};

import { onGoingGrants, completedGrants } from "../data/researchData";

export default function ResearchPage() {
  const [activeFilter, setActiveFilter] = useState("On Going Grants");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  // Choose dataset based on filter
  let dataset = [];

  if (activeFilter === "On Going Grants") {
    dataset = onGoingGrants;
  } else if (activeFilter === "Completed Grants") {
    dataset = completedGrants;
  }

  // Apply search filter
  const filteredGrants = dataset.filter((grant) =>
    grant.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="text-gray-200 body-font min-h-screen px-5 py-12 ">
      <h1 className="text-3xl font-bold text-center mb-8">RESEARCH GRANTS</h1> 
      <div className="container mx-auto flex gap-8">
      
        {/* Left Sidebar */}
        <aside
          className="
            w-64 
            bg-white/10 backdrop-blur-md 
            p-6 rounded-2xl shadow-lg
            h-[170px]                 
            sticky top-0         
          "
        >
        {Object.entries(filters).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="uppercase font-bold text-sm text-gray-300 mb-3">
              {category}
            </h2>
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveFilter(item);
                    setExpanded(null);
                  }}
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    activeFilter === item
                      ? "bg-purple-800 text-white"
                      : "bg-white/20 text-gray-300 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>


        {/* Right Content */}
        <main className="flex-1">
          {/* Search Bar */}
          <div className="flex md:w-full mx-auto items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-md mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search research Grants..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />

          {search ? (
            <XMarkIcon
              onClick={() => setSearch("")}
              className="w-5 h-5 text-gray-400 cursor-pointer hover:text-purple-600 transition"
            />
          ) : (
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          )}
        </div>

          {/* Grants/Publications List */}
          <div className="grid gap-4">
            {filteredGrants.length > 0 ? (
              filteredGrants.map((grant, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow transition"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                  >
                    <div>
                      <h3 className="font-bold text-lg text-white">
                        {grant.title}
                      </h3>
                      <p className="text-purple-400 font-semibold">
                        {grant.role}
                      </p>
                      <p className="text-gray-300">
                        {grant.fund} &nbsp; | &nbsp; {grant.duration}
                      </p>
                    </div>
                    {expanded === idx ? (
                      <ChevronUpIcon className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {expanded === idx && (
                    <div className="mt-3 text-gray-300 border-t border-white/20 pt-3">
                      {grant.detail}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400">No {activeFilter} found.</p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
