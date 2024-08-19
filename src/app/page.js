'use client'

import Hero from "./containers/HeroSection";
import AboutSection from "./containers/AboutSection";
import ClassesSection from "./containers/ClassesSection";
import BenifitsSection from "./containers/BenifitsSection";
import TableSection from "./containers/TableSection";
import CTASection from "./components/CTASection";
import TreatmentSection from "./containers/TreatmentSection";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import PreLoader from "./components/framermotion/LoadingAnim";

export default function Home() {

  const [loading, setLoading] = useState(true);

  return (
   <main>
    <AnimatePresence>
        {loading && <PreLoader setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
    </motion.div>
      )}
   </main>
  );
}
