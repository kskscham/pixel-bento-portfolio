import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
