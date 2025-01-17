"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Map, History, Clock, Camera, Navigation2, Info, Share2, Star } from 'lucide-react';

export default function HowItWorks() {
  const mainSteps = [
    {
      title: "Explore o Mapa",
      description: "Navegue pelo mapa interativo de São Paulo e descubra pontos turísticos incríveis",
      image: "https://images.unsplash.com/photo-1578002573559-689b0abc4148?w=800&q=80",
      icon: Map,
      features: [
        "Visualização 3D dos pontos turísticos",
        "Navegação intuitiva pelo mapa",
        "Zoom automático nos locais importantes"
      ]
    },
    {
      title: "Conheça as Histórias",
      description: "Cada local tem uma história única para contar, com fotos e informações detalhadas",
      image: "https://images.unsplash.com/photo-1578002573559-689b0abc4148?w=800&q=80",
      icon: History,
      features: [
        "Contexto histórico detalhado",
        "Fotos antigas e atuais",
        "Curiosidades exclusivas"
      ]
    },
    {
      title: "Dados em Tempo Real",
      description: "Veja informações atualizadas sobre clima, horários de funcionamento e muito mais",
      image: "https://images.unsplash.com/photo-1578002573559-689b0abc4148?w=800&q=80",
      icon: Clock,
      features: [
        "Horários de funcionamento",
        "Previsão do tempo local",
        "Lotação em tempo real"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Camera,
      title: "Fotos 360°",
      description: "Visualize os locais em perspectiva panorâmica"
    },
    {
      icon: Navigation2,
      title: "Rotas Sugeridas",
      description: "Roteiros personalizados baseados no seu interesse"
    },
    {
      icon: Info,
      title: "Informações Práticas",
      description: "Dicas de transporte, alimentação e acessibilidade"
    },
    {
      icon: Share2,
      title: "Compartilhamento",
      description: "Compartilhe roteiros com amigos e família"
    }
  ];

  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Como Funciona</h2>
          <p className="text-lg text-muted-foreground">
            Uma experiência completa de exploração virtual da cidade de São Paulo,
            combinando tecnologia e história para uma jornada única
          </p>
        </motion.div>

        {/* Principais passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 
                border border-primary/10 hover:border-primary/20 transition-all"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary/20 p-2 rounded-lg">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Recursos adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full 
                flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}