"use client";

import { motion } from 'framer-motion';
import { Building2, Coffee, Landmark, Map, Clock, Cloud, Camera, Info } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Building2,
    title: "Monumentos Históricos",
    description: "Explore os edifícios mais emblemáticos de São Paulo, do MASP ao Theatro Municipal"
  },
  {
    icon: Coffee,
    title: "Gastronomia & Cultura",
    description: "Descubra a rica diversidade cultural nos restaurantes e feiras da cidade"
  },
  {
    icon: Landmark,
    title: "Patrimônio Cultural",
    description: "Conheça a história fascinante por trás de cada ponto turístico"
  },
  {
    icon: Map,
    title: "Navegação Intuitiva",
    description: "Mapa interativo com interface fácil de usar e informações detalhadas"
  },
  {
    icon: Clock,
    title: "Horários Atualizados",
    description: "Informações em tempo real sobre funcionamento e melhor hora para visitar"
  },
  {
    icon: Cloud,
    title: "Previsão do Tempo",
    description: "Dados meteorológicos atualizados para planejar melhor sua visita"
  },
  {
    icon: Camera,
    title: "Galeria de Fotos",
    description: "Imagens profissionais e dicas dos melhores ângulos para fotografar"
  },
  {
    icon: Info,
    title: "Dicas Exclusivas",
    description: "Sugestões de roteiros e informações práticas para sua visita"
  }
];

export default function Features() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Recursos Incríveis</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubra tudo o que o São Paulo Explorer oferece para tornar sua experiência única
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}