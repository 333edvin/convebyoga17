'use client'
import { motion } from 'framer-motion';
export default function Slide({children}){
    return(
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    transition={{
    duration: 0.8,
    delay:0.5,
    ease: [0, 0.71, 0.2, 1.01]
    }}
    variants={{
    visible: { opacity: 1, x: 0},
    hidden: { opacity: 0, x: -20}
    }}
    >
        {children}
    </motion.div>
    )
}