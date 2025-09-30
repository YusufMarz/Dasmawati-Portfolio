import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

import { researchPublication } from "../data/researchData";

export default function Publications() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  // Only research publications
  const dataset = researchPublication;

  // Apply search filter
  const filteredGrants = dataset.filter((grant) =>
    grant.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="text-gray-200 body-font min-h-screen px-5 py-12">
      <div className="container mx-auto">
        {/* Search Bar */}
        <h1 className="text-3xl font-bold text-center mb-8">PUBLICATIONS</h1> 
        <div className="flex md:w-2/3 mx-auto items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-md mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search research publications..."
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
        
        {/* Publications List */}
        <div className="grid gap-4 w-5/6 mx-auto">
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
                    <p className="text-purple-400 font-semibold">{grant.role}</p>
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
            <p className="text-gray-400">No research publications found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
