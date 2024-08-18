import Hero from "./containers/HeroSection";
import AboutSection from "./containers/AboutSection";
import ClassesSection from "./containers/ClassesSection";
import BenifitsSection from "./containers/BenifitsSection";
import TableSection from "./containers/TableSection";
import CTASection from "./components/CTASection";
import TreatmentSection from "./containers/TreatmentSection";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Home() {
  return (
   <main>
    <Hero/>
    <BenifitsSection/>
    <AboutSection/>
    <ClassesSection/>
    <TableSection/>
    <TreatmentSection/>
    <CTASection/>
    <div className="fixed top-20 right-5 bg-white/20 text-3xl text-lime-400 rounded-full p-1">
        <AiOutlineWhatsApp />
    </div>
   </main>
  );
}
