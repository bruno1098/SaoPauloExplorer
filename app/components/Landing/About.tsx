"use client";

import { motion } from 'framer-motion';
import { Heart, Globe, Code, Users } from 'lucide-react';

export default function About() {
  const initiatives = [
    {
      icon: Heart,
      title: "Iniciativa Social",
      description: "Democratizando o acesso à cultura e história de São Paulo através da tecnologia"
    },
    {
      icon: Globe,
      title: "Preservação Cultural",
      description: "Documentando e preservando digitalmente o patrimônio histórico da cidade"
    },
    {
      icon: Code,
      title: "Código Aberto",
      description: "Projeto open-source que incentiva a colaboração da comunidade de desenvolvedores"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Construído com feedback de guias turísticos, historiadores e moradores locais"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Mais que um Guia Virtual
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O São Paulo Explorer nasceu da paixão por conectar pessoas à rica história
            e cultura da maior cidade do Brasil. Nossa missão é tornar o patrimônio
            cultural de São Paulo mais acessível e interativo para todos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-xl
                border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 