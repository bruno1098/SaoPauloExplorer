"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Location } from '@/app/types/map';

interface LocationListProps {
  activeSection: number;
  onLocationSelect: (index: number) => void;
  locations: Location[];
}

export default function LocationList({ activeSection, onLocationSelect, locations }: LocationListProps) {
  return (
    <div className="space-y-4">
      {locations.map((location, index) => (
        <motion.button
          key={location.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onLocationSelect(index)}
          className={`group relative flex items-center gap-4 p-4 rounded-xl
            ${activeSection === index
              ? 'bg-primary text-primary-foreground'
              : 'bg-background/80 hover:bg-background/90'
            } backdrop-blur-sm transition-all duration-300 shadow-lg w-full`}
        >
          <div className="relative">
            <MapPin className="w-6 h-6" />
            {activeSection === index && (
              <motion.div
                layoutId="locationIndicator"
                className="absolute inset-0 bg-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            )}
          </div>
          <div className="text-left">
            <h3 className="font-semibold">{location.name}</h3>
            <p className="text-sm opacity-80">{location.description}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}