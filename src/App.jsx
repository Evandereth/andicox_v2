import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonial from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Work />
        <Services />
        <Process />
        <Testimonial />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
