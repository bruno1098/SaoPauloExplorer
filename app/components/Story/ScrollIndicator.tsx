"use client";

import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

export default function ScrollIndicator() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.div
      className={`fixed z-20 pointer-events-none
        ${isMobile 
          ? 'bottom-[32vh] right-4 flex-row items-center gap-2' 
          : 'bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2'
        } flex`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.p
        className="text-sm text-muted-foreground font-medium
          bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        {isMobile ? 'Deslize para explorar' : 'Role para explorar'}
      </motion.p>
      <motion.div
        animate={isMobile 
          ? { x: [0, 8, 0] }
          : { y: [0, 8, 0] }
        }
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {isMobile 
          ? <ChevronRight className="w-5 h-5 text-primary" />
          : <ChevronDown className="w-5 h-5 text-primary" />
        }
      </motion.div>
    </motion.div>
  );
}