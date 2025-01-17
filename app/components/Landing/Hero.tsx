"use client";

import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <div className="relative min-h-[100svh]">
      <ThreeBackground />
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl lg:text-8xl font-bold
                bg-clip-text text-transparent bg-gradient-to-r 
                from-primary via-primary/80 to-primary
                leading-tight tracking-tight"
            >
              São Paulo Explorer
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground
                max-w-2xl mx-auto leading-relaxed"
            >
              Embarque em uma jornada virtual pela maior metrópole da América Latina,
              onde cada esquina conta uma história única
            </motion.p>

            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full 
                text-lg font-semibold inline-flex items-center gap-2
                shadow-lg shadow-primary/20 hover:shadow-xl
                hover:shadow-primary/30 transition-all duration-300"
            >
              Iniciar Aventura
              <span className="text-2xl">🗺️</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground text-sm font-medium"
        >
          Role para descobrir mais
        </motion.div>
      </motion.div>
    </div>
  );
}