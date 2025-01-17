"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    role: "Turista",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    content: "Incrível como o site me ajudou a planejar meu roteiro em São Paulo. As informações são precisas e atualizadas!"
  },
  {
    name: "Carlos Santos",
    role: "Fotógrafo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "Como fotógrafo, encontrei lugares incríveis para fazer ensaios. O mapa interativo é uma ferramenta fantástica!"
  },
  {
    name: "Marina Costa",
    role: "Guia Turística",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "Uso o São Paulo Explorer com meus clientes. As histórias e dados culturais são muito bem pesquisados."
  }
];

export default function Testimonials() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O Que Dizem Sobre Nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}