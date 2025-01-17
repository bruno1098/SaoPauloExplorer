"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Map as MapIcon, Satellite, Mountain } from 'lucide-react';

interface LayerControlProps {
  onMapTypeChange: (type: string) => void;
}

export default function LayerControl({ onMapTypeChange }: LayerControlProps) {
  const mapTypes = [
    { id: 'roadmap', name: "Ruas", icon: <MapIcon className="w-5 h-5" /> },
    { id: 'satellite', name: "Satélite", icon: <Satellite className="w-5 h-5" /> },
    { id: 'terrain', name: "Terreno", icon: <Mountain className="w-5 h-5" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-2 mb-3">
        <Layers className="w-5 h-5" />
        <h3 className="font-semibold">Camadas</h3>
      </div>
      <div className="space-y-2">
        {mapTypes.map(type => (
          <button
            key={type.id}
            onClick={() => onMapTypeChange(type.id)}
            className="w-full px-3 py-2 rounded-md text-left text-sm transition-colors
              hover:bg-muted flex items-center gap-2"
          >
            {type.icon}
            {type.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}