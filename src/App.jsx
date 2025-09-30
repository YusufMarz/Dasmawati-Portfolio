// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";   
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import ScrollToTop from "./components/ScrollToTop"; 
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publication from "./pages/Publication";
import Achivement from "./pages/Achivement";
import Supervision from "./pages/Supervision";
import Activity from "./pages/Activity";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="relative">
        {/* Background behind everything */}
        <div className="absolute inset-0 -z-10">
          <StarBackground />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/achivement" element={<Achivement />} />
            <Route path="/supervision" element={<Supervision />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
