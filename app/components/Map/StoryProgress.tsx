"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StoryProgressProps {
  currentSection: number;
  totalSections: number;
  onSectionChange: (section: number) => void;
}

export default function StoryProgress({
  currentSection,
  totalSections,
  onSectionChange,
}: StoryProgressProps) {
  return (
    <div className="bg-background/80 backdrop-blur-sm p-2 sm:p-4 rounded-full shadow-lg">
      <div className="flex gap-2 sm:gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSectionChange(index)}
            className="relative w-8 sm:w-12 h-1.5 sm:h-2 rounded-full bg-muted overflow-hidden"
          >
            {currentSection === index && (
              <motion.div
                layoutId="progressIndicator"
                className="absolute inset-0 bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}