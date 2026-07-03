import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Hackathons from "./pages/Hackathons";
import Certificates from "./pages/Certificates";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or use "smooth" if you prefer
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-base min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
