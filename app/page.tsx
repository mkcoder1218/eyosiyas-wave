import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import HowitWorks from "./components/HowitWorks";
import Aboutapp from "./components/Aboutapp";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/footer";
import Cta from "./components/cta";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9FFE3]">
      <NavBar />
      <Hero />
      <LogoSection />
      <HowitWorks />
      <Aboutapp />
      <WhyChoose />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}
