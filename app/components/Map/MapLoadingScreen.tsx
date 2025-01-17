"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

export default function MapLoadingScreen() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Map className="w-8 h-8 text-primary" />
        </motion.div>
        <p className="text-lg text-muted-foreground">Carregando mapa...</p>
      </motion.div>
    </div>
  );
}