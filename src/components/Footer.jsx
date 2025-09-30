// src/components/Footer.jsx
import { PhoneIcon, EnvelopeIcon, PrinterIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-3">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section - Contact Info */}
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <PrinterIcon className="w-5 h-5 text-white" />
            Fax: 09-7642026
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-white" />
            email: <a href="mailto:dasmawati@usm.my" className="hover:underline">dasmawati@usm.my</a>
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-white" />
            Tel (office) : 09-7675807 
          </p>
        </div>

        {/* Right Section - Research Profiles */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://scholar.google.com.my/citations?user=HYjax4cAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <img src="/google scholar.png" alt="Google Scholar" className="h-12 w-12" />
          </a>
          <a href="https://www.researchgate.net/profile/Dasmawati-Mohamad" target="_blank" rel="noopener noreferrer">
            <img src="/research gate.png" alt="ResearchGate" className="h-12 w-12" />
          </a>
          <a href="https://www.scopus.com/authid/detail.uri?authorId=35484971000" target="_blank" rel="noopener noreferrer">
            <img src="/scopus preview.png" alt="Scopus" className="h-12 w-30 object-contain bg-white p-1 rounded" />
          </a>
        </div>
      </div>
    </footer>
  );
}
