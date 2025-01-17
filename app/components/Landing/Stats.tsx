"use client";

import { motion } from 'framer-motion';
import { Users, Building, Coffee, Camera } from 'lucide-react';

const stats = [
  { icon: Users, value: '1M+', label: 'Visitantes por ano' },
  { icon: Building, value: '50+', label: 'Pontos turísticos' },
  { icon: Coffee, value: '100+', label: 'Restaurantes' },
  { icon: Camera, value: '1000+', label: 'Fotos compartilhadas' },
];

export default function Stats() {
  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <motion.p
                className="text-3xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}