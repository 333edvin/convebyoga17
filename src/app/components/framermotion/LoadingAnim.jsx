'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
export default function PreLoader({ setLoading }){
    useEffect(() => {
        // Set a timer to hide the preloader after 3 seconds
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [setLoading]);
    return(
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-lime-950 text-white flex flex-col"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl">YOGA</h1>
       <Image src="/images/preloader.svg" width={150} height={150}/>
      </motion.div>
    )
}