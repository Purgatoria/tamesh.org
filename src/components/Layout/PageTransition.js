'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
    const pathname = usePathname()

    return (
        <motion.div 
            className="grow"
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 350,
                damping: 30,
                delay: 0.1 // Küçük bir gecikme ekledik
            }}
        >
            <main>
                {children}
            </main>
        </motion.div>
    )
} 