"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Focus, BarChart2 } from 'lucide-react';

interface MapControlsProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onCenter?: () => void;
  onDataToggle: () => void;
}

export default function MapControls({ onZoomIn, onZoomOut, onCenter, onDataToggle }: MapControlsProps) {
  const controls = [
    { icon: <ZoomIn className="w-5 h-5" />, label: "Aumentar Zoom", onClick: onZoomIn },
    { icon: <ZoomOut className="w-5 h-5" />, label: "Diminuir Zoom", onClick: onZoomOut },
    { icon: <Focus className="w-5 h-5" />, label: "Centralizar", onClick: onCenter },
    { icon: <BarChart2 className="w-5 h-5" />, label: "Dados", onClick: onDataToggle },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-20 right-4 sm:bottom-auto sm:top-20 z-30
        flex flex-row sm:flex-col gap-2"
    >
      {controls.map((control, index) => (
        <motion.button
          key={index}
          onClick={control.onClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-background/90 backdrop-blur-sm 
            hover:bg-background shadow-lg group relative
            border border-border/10"
        >
          {control.icon}
          <span className="absolute left-full ml-2 px-2 py-1 
            bg-background/90 backdrop-blur-sm rounded-md text-sm 
            opacity-0 group-hover:opacity-100 transition-opacity 
            whitespace-nowrap pointer-events-none hidden sm:block">
            {control.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}