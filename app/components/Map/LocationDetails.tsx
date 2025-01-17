"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Star, X } from 'lucide-react';
import { Location } from '@/app/types/map';

interface LocationDetailsProps {
  location: Location;
  onClose: () => void;
}

export default function LocationDetails({ location, onClose }: LocationDetailsProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-0 right-0 w-full sm:w-[400px] sm:bottom-24 sm:right-4 
          bg-background/95 backdrop-blur-sm rounded-t-lg sm:rounded-lg shadow-lg z-20
          transition-all duration-300 ease-in-out"
      >
        <div className="relative">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-48 sm:h-40 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 bg-background/80 rounded-full 
              hover:bg-background/90 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{location.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Centro Histórico</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>Aberto • 9:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4" />
              <span>4.8 (2.5k avaliações)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}