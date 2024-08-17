import Hero from "./containers/HeroSection";
import AboutSection from "./containers/AboutSection";
import ClassesSection from "./containers/ClassesSection";
import BenifitsSection from "./containers/BenifitsSection";
import TableSection from "./containers/TableSection";
import CTASection from "./components/CTASection";
import TreatmentSection from "./containers/TreatmentSection";

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
   </main>
  );
}
