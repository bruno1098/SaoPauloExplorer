"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapSection } from '@/app/types/map';

interface StorySectionProps {
  section: MapSection;
  onInView: (sectionId: string) => void;
}

export default function StorySection({ section, onInView }: StorySectionProps) {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center p-8"
    >
      <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-lg text-muted-foreground">{section.description}</p>
        {section.location.imageUrl && (
          <img
            src={section.location.imageUrl}
            alt={section.location.name}
            className="mt-6 rounded-lg w-full h-64 object-cover"
          />
        )}
      </div>
    </motion.div>
  );
}