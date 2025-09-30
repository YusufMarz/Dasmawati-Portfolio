import { BookOpenIcon, DocumentTextIcon , AcademicCapIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { supervisionData } from "../data/supervisions";


const grants = [
  {
    type: "BRIDGING GRANT",
    title:
      "Development Of Antimicrobial PMMA Composites For Craniofacial Reconstruction Application",
    details: "USM (Bridging Grant), RM 8,000.00",
    extra: "Principal Investigator, 25/01/2018 - 25/01/2019",
  },
  {
    type: "RESEARCH GRANT",
    title: "Flowable Resin Composite from Agricultural Biowaste",
    details: "RM 100,000.00, 01/03/2016 - 31/08/2019",
  },
  {
    type: "RUT GRANT",
    title:
      "Biomodelling for Cranio-Maxillofacial Reconstruction: Patient Specific Aesthetic, Functional and Affordable Biomaterial Implants and Prostheses",
    details: "USM (RUT), RM 999,089.00, 12/2012 - 04/2018",
    extra: "Principal Investigator",
  },
  {
    type: "RUT GRANT",
    title:
      "Subcutaneous Tissue Responses To Novel Zinc Oxide Eugenol Dental Filling Materials: An In Vivo Study",
    details: "USM (RUI), RM111,551.40, 15/4/2015-14/4/2017",
    extra: "Principal Investigator",
  },
  {
    type: "RUT GRANT",
    title:
      "Evaluation of Glass Ionomer Cements (GICs) Properties with Coumarin Derivatives as Antibacterial Agent",
    details: "USM (RUI), RM152, 490.00, 15/12/2012-15/6/2016",
    extra: "Principal Investigator",
  },
];

const awards = [
  {
    title: "Silver Medal Award (PECIPTA 2019)",
    desc: "A Novel Computer Aided Reconstruction in Hybrid Cranioplasty",
    place: "UiTHM, Batu Pahat, Johor",
    img: "/public/medal/silver.png",
  },
  {
    title: "Silver Medal Award (ITEX 2019)",
    desc: "P.S.I. Hybrid Cranioplasty",
    place: "KLCC, Kuala Lumpur",
    img: "/public/medal/silver.png",
  },
  {
    title: "Gold Medal Award (MTE 2019)",
    desc: "GiZiDent",
    place: "PWTC, Kuala Lumpur",
    img: "/public/medal/gold.png",
  },
  {
    title: "Gold Medal Award (ITEX  2018)",
    desc: "G-HybriDFIL Flow",
    place: "KLCC, Kuala Lumpur",
    img: "/public/medal/gold.png",
  },
  {
    title: "Silver Medal Award (ITEX 2018)",
    desc: "3D-CPACC",
    place: "KLCC, Kuala Lumpur",
    img: "/public/medal/silver.png",
  },
  {
    title: "Gold Medal Award (RISE 2015)",
    desc: "G-ACERIN",
    place: "UiTM, Shah Alam",
    img: "/public/medal/gold.png",
  },
  {
    title: "Gold Medal Award (RISE 2015)",
    desc: "3D-OPACC",
    place: "UiTM, Shah Alam",
    img: "/public/medal/gold.png",
  },
  {
    title: "Gold Medal Award (PECIPTA 2013)",
    desc: "D-HybriDFil",
    place: "KLCC, Kuala Lumpur",
    img: "/public/medal/gold.png",
  },
  {
    title: "Silver Medal Award (ITEX 2013)",
    desc: "G-HybriDFIL",
    place: "KLCC, Kuala Lumpur",
    img: "/public/medal/silver.png",
  },
  {
    title: "Gold Medal Award (MTE 2010)",
    desc: "KeLFiL",
    place: "PWTC, Kuala Lumpur",
    img: "/public/medal/gold.png",
  },
];

const SupervisionCard = ({ student }) => (
  <div className="w-80 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md text-left">
    <h2 className="text-lg font-bold text-purple-400">{student.name}</h2>
    <p className="text-sm text-gray-400">{student.year} · {student.degree}</p>
    <p className="text-gray-200 text-sm mt-2 line-clamp-3">{student.title}</p>
    <p className="text-xs text-gray-400 mt-2 italic">{student.role}</p>
  </div>
);

export default function Home() {
  const [pubRef, pubInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [grantRef, grantInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [supervisionRef, supervisionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [innovationRef, innovationInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();
  const row1 = supervisionData.filter((_, i) => i % 2 === 0);
  const row2 = supervisionData.filter((_, i) => i % 2 !== 0);
    return (
      
      <>
        {/* Hero Section */}
        <section className=" body-font">
          <div className="container mx-auto flex px-5 py-[9.5rem] md:flex-row flex-col items-center">
            {/* Left Text */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-10">
              <h1 className="text-6xl text-white md:text-5xl font-bold mb-6">
              ASSOCIATE PROFESSOR TS. DR. <br/> 
              DASMAWATI BINTI MOHAMAD
              </h1>

              <p className=" text-purple-600 text-lg leading-loose flex gap-x-10">
                <span>President of Malaysian Dental Materials Society
                <br/> Asian Biomaterials Federation, Council Member
                </span> 
                Vice President of Malaysian Biomaterials Society
                <br/> Editor-In-Chief of Archives of Orofacial Sciences
              </p>
              <p className="mb-8 text-purple-600 text-lg leading-loose flex gap-x-10">
                <span> (ANDeMS) Board Member  </span> 
              </p>


              <h3 className="text-1xl text-white md:text-2xl font-bold mb-6">
              Specialization: Biomaterials Science <br/>
              PhD (Manchester, UK), MSc (Manchester, UK), B ENG (Birmingham, UK)
              </h3>

              <div className="flex gap-4 mt-4 md:mt-0 mb-8">
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

              <div className="flex justify-center">
              <button className="relative w-72 h-10 rounded-full font-bold text-white overflow-hidden">
                {/* Animated Gradient Border */}
                <span className="absolute inset-0 rounded-full 
                               bg-[linear-gradient(to_right,#ff9ecf,#7f42a7,#6600c5,#5300a0,#ff75c3,#ff9ecf)]
                                bg-[length:200%_100%] animate-gradient-x 
                                -z-10
                                p-[3px]">
                  {/* inner transparent background */}
                  <span className="block w-full h-full rounded-full bg-black"></span>
                </span>
                <span className="relative z-10"
                onClick={() => navigate("/Publication")}>Explore My Work</span>
              </button>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
              <div
                className="
                  w-80 h-132 
                  rounded-full 
                  bg-purple-800 backdrop-blur-md 
                  border border-white/20 
                  shadow-xl 
                  flex items-center justify-center
                "
              >
                <img
                  className="w-96 h-196 object-cover object-center rounded-full scale-110"
                  alt="hero"
                  src="/dasmawatiProfile.png"
                />
              </div>
            </div>

          </div>
        </section>


      {/* Research Highlights */}
    <section className="text-white body-font">
      <div className="container px-5 py-10 mx-auto mb-[3rem]">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mb-0 text-white">
            Research & Academic Highlights
          </h1>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {/* Publications */}
          <div ref={pubRef} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <BookOpenIcon className="w-12 h-12 mb-3 inline-block text-purple-700" />
              <h2 className="title-font font-medium text-3xl text-white">
                {pubInView ? <CountUp end={100} duration={3} /> : 0}+
              </h2>
              <p className="leading-relaxed">Publications</p>
            </div>
          </div>

          {/* Supervisions */}
          <div ref={supervisionRef} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <AcademicCapIcon className="w-12 h-12 mb-3 inline-block text-purple-700" />
              <h2 className="title-font font-medium text-3xl text-white">
                {supervisionInView ? <CountUp end={27} duration={5} /> : 0}+
              </h2>
              <p className="leading-relaxed">Supervisions</p>
            </div>
          </div>

          {/* Innovations */}
          <div ref={innovationRef} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <LightBulbIcon className="w-12 h-12 mb-3 inline-block text-purple-700" />
              <h2 className="title-font font-medium text-3xl text-white">
                {innovationInView ? <CountUp end={16} duration={5} /> : 0}
              </h2>
              <p className="leading-relaxed">Innovations</p>
            </div>
          </div>

          {/* Research Grants */}
          <div ref={grantRef} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <DocumentTextIcon  className="w-12 h-12 mb-3 inline-block text-purple-700" />
              <h2 className="title-font font-medium text-3xl text-white">
                {grantInView ? <CountUp end={5000} duration={2} separator="," /> : 0}+
              </h2>
              <p className="leading-relaxed">Citations</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="text-gray-200 body-font px-5 py-24 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-center">
        
        {/* Biography Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">
            BIOGRAPHY
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            She currently holds the position of Vice President for the Malaysian 
            Biomaterials Society and serves as the Editor in Chief of Archives of 
            Orofacial Sciences, a SCOPUS journal. Recently, she has been appointed 
            as a board member of the Asian Biomaterials Federation (ABF) and the 
            Asian Network of Dental Materials Societies (ANDEMS). She also a founding 
            President of Malaysian Dental Materials Society (MDEM).
          </p>
        </div>

        {/* Research Interests Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">
            RESEARCH INTERESTS
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Her research focuses on the development of sustainable tooth-colored 
            restorative materials from nanosilica rice husk with incorporation of 
            antibacterial agent. She also exploring on application of polyamide 
            composite as a feedstock for fused deposition modelling 3D printing. 
            This potentially can be used as patient specific implant polyamide 
            composite in craniofacial reconstruction.
          </p>
        </div>
      </div>
    </section>

    {/* Title */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-bold title-font text-white">
            Research Grants Showcase
          </h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2} // Show center + small preview of next/prev
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {grants.map((grant, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 rounded-3xl px-8 pt-16 pb-24 
                              text-center shadow-xl backdrop-blur-md
                              ${
                                isActive
                                  ? "bg-purple-900 scale-105 text-white"
                                  : "bg-white/10 scale-90 text-gray-400"
                              }`}
                >
                  <h2 className="tracking-widest text-xs font-medium mb-1">
                    {grant.type}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-bold mb-3">
                    {grant.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{grant.details}</p>
                  {grant.extra && (
                    <p className="leading-relaxed">
                      <strong>{grant.extra}</strong>
                    </p>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-purple-900 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
          onClick={() => navigate("/Research")}>
            See All Research Project
          </button>
        </div>
      </div>
    </section>


     {/* Supervision */}
<section className="text-gray-200 body-font">
  <div className="container px-5 py-24 mx-auto">
    {/* Title */}
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-2xl font-bold title-font text-white">
        SUPERVISIONS
      </h1>
    </div>

    {/* Row 1: left to right */}
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity,  repeatType: "loop", duration: 25, ease: "linear" }}
      >
        {[...row1, ...row1].map((student, i) => (
          <div
            key={i}
            className="w-[280px] h-[360px] flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center flex flex-col items-center "
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center mb-4 overflow-hidden">
              {student.img ? (
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-2xl text-white">👤</span>
              )}
            </div>

            {/* Name */}
            <h2 className="text-lg font-bold text-white">{student.name}</h2>

            {/* Degree + Year */}
            <p className="text-purple-400 font-semibold mb-1">
              {student.degree} ({student.year})
            </p>

            {/* Role */}
            <p className="text-gray-300 font-medium mb-2">{student.role}</p>

            {/* Title */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {student.title}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Row 2: right to left */}
    <div className="overflow-hidden mt-8">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...row2, ...row2].map((student, i) => (
          <div
            key={i}
            className="w-[280px] h-[360px] flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center flex flex-col items-center "
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center mb-4 overflow-hidden">
              {student.img ? (
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-2xl text-white">👤</span>
              )}
            </div>

            {/* Name */}
            <h2 className="text-lg font-bold text-white">{student.name}</h2>

            {/* Degree + Year */}
            <p className="text-purple-400 font-semibold mb-1">
              {student.degree} ({student.year})
            </p>

            {/* Role */}
            <p className="text-gray-300 font-medium mb-2">{student.role}</p>

            {/* Title */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {student.title}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-10">
      <button
        className="bg-purple-900 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
        onClick={() => navigate("/supervision")}
      >
        See All Supervisions
      </button>
    </div>
  </div>
</section>



    {/* Affiliations & Recognitions */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-2xl text-white md:text-4xl font-bold mb-6">
            Affiliations & Recognitions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>

        {/* Glass Card */}
        <div className="flex justify-center">
        <div
            className="
              w-[90%] md:w-[90%] lg:w-[85%]
              min-h-[700px]
              rounded-2xl
              bg-white/10 backdrop-blur-md
              border border-white/20
              shadow-xl
              p-8
            "
          >
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
              <img src="/usmLogo.png" alt="Usm Logo " className="h-[60%] object-contain"/>
              <img src="/apexLogo.png" alt="Apex Logo " className="h-[50%] object-contain"/>
              <img src="/usmExpert.png" alt="Usm Expert Logo " className="h-[60%] object-contain"/>
              <img src="/mdem.jpg" alt="MDEM Logo " className="h-[70%] object-contain"/>
              <img src="/mbsLogo.jpg" alt="Mbs Logo " className="h-[60%] object-contain"/>
              <img src="/IADR.png" alt="IADR Logo " className="h-[60%] object-contain"/>
              <img src="/perintis.jpg" alt="PERINTIS Logo " className="h-[60%] object-contain"/>
              <img src="/YSM.png" alt="YSM Logo " className="h-[100%] object-contain"/>
              <img src="/ITEX.png" alt="ITEX Logo " className="h-[70%] object-contain"/>
              <img src="/IChemE.png" alt="IChemE Logo " className="h-[70%] object-contain"/>
              <img src="/LNM.png" alt="LNM Logo " className="h-[80%] object-contain"/>
              <img src="/UOB.png" alt="UOB Logo " className="h-[70%] object-contain"/>
              <img src="/Manchester.jpg" alt="Manchester Logo " className="h-[70%] object-contain"/>
              <img src="/ADM.png" alt="ADM Logo " className="h-[80%] object-contain"/>
              <img src="/PKW.jpg" alt="PKW Logo " className="h-[70%] object-contain"/>
              
            </div>

          </div>  
        </div>
        
      </div>
    </section>


        {/* Download CV */}
        <section className="flex flex-col items-center justify-center text-center py-12 mb-5 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            “ Let’s Collaborate in Advancing Biomaterials Science “
          </h1>
          <a
              href="/CV AP Dr Dasmawati Mohamad Jun 2025 5 pages.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              Donwload CV
            </a>
        </div>
      </section>

      </>
    );
  }
  