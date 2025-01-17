"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de newsletter
    setEmail('');
  };

  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="mb-8 opacity-90">
            Receba atualizações sobre eventos, novas atrações e dicas exclusivas de São Paulo
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="px-6 py-3 rounded-full bg-primary-foreground text-primary
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary
                focus:ring-primary-foreground min-w-[300px]"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-background text-primary
                font-semibold hover:opacity-90 transition-opacity"
              type="submit"
            >
              Inscrever-se
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}