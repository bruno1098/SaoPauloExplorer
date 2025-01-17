"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapSection } from '@/app/types/map';
import { ChevronDown, Info } from 'lucide-react';

interface StorySectionProps {
  section: MapSection;
  onInView: (sectionId: string) => void;
  isLast?: boolean;
  onShowDetails?: () => void;
}

export default function StorySection({ section, onInView, isLast, onShowDetails }: StorySectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      onInView(section.id);
    }
  }, [inView, section.id, onInView]);

  return (
    <div className="relative min-h-screen flex items-center px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full backdrop-blur-sm p-6 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
        <p className="text-sm text-muted-foreground mb-6">{section.description}</p>
        
        {section.location.imageUrl && (
          <motion.img
            src={section.location.imageUrl}
            alt={section.location.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <motion.button
          onClick={onShowDetails}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md mt-4 hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Info className="w-4 h-4" />
          Ver mais detalhes
        </motion.button>

        {!isLast && (
          <motion.div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}