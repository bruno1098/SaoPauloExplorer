"use client";

import { motion } from 'framer-motion';
import { 
  Layers, 
  Box, 
  Map, 
  Sparkles, 
  Palette, 
  Code2
} from 'lucide-react';

export default function Technologies() {
  const techs = [
    {
      name: "Next.js 14",
      description: "Framework React moderno para uma experiência web otimizada",
      icon: Layers
    },
    {
      name: "Three.js",
      description: "Biblioteca 3D para visualizações interativas",
      icon: Box
    },
    {
      name: "Google Maps API",
      description: "Mapas detalhados e dados geográficos precisos",
      icon: Map
    },
    {
      name: "Framer Motion",
      description: "Animações fluidas para melhor experiência do usuário",
      icon: Sparkles
    },
    {
      name: "Tailwind CSS",
      description: "Estilização moderna e responsiva",
      icon: Palette
    },
    {
      name: "TypeScript",
      description: "Código seguro e bem tipado",
      icon: Code2
    }
  ];

  return (
    <section className="py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tecnologias de Ponta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos as mais modernas tecnologias web para criar uma
            experiência única de exploração virtual
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-background/50 
                backdrop-blur-sm rounded-xl border border-primary/10 
                hover:border-primary/20 transition-all group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center
                bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <tech.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 