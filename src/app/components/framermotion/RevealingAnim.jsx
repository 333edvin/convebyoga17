'use client'

import { motion } from 'framer-motion';

export default function Reveal({children}){

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
    visible: { opacity: 1, y: 0},
    hidden: { opacity: 0, y: 30}
    }}
    >
        {children}
    </motion.div>
    )
}