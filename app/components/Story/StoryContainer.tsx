"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapSection } from '@/app/types/map';
import StorySection from './StorySection';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

interface StoryContainerProps {
  sections: MapSection[];
  onSectionChange: (sectionId: string) => void;
  onShowDetails: () => void;
}

export default function StoryContainer({
  sections,
  onSectionChange,
  onShowDetails
}: StoryContainerProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      // Configuração do IntersectionObserver para detectar cards visíveis
      const options = {
        root: containerRef.current,
        threshold: 0.6, // Card precisa estar 60% visível
        rootMargin: '0px'
      };

      let currentlyVisible: string | null = null;

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId && sectionId !== currentlyVisible) {
              currentlyVisible = sectionId;
              onSectionChange(sectionId);
            }
          }
        });
      }, options);

      // Observa todos os cards
      const cards = containerRef.current.querySelectorAll('[data-section-id]');
      cards.forEach(card => observerRef.current?.observe(card));

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [isMobile, onSectionChange]);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-10 h-[30vh] min-h-[250px]
          bg-gradient-to-t from-background to-transparent"
      >
        <div 
          ref={containerRef}
          className="absolute bottom-0 left-0 right-0 overflow-x-auto
            scrollbar-hide pb-4 px-4"
        >
          <div className="flex gap-4 w-max snap-x snap-mandatory">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                data-section-id={section.id}
                className="w-[300px] flex-shrink-0 bg-background/80 
                  backdrop-blur-sm rounded-lg shadow-lg cursor-pointer
                  hover:bg-background/90 transition-colors snap-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-4">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={section.location.imageUrl}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {section.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onShowDetails();
                    }}
                    className="mt-3 text-sm text-primary hover:underline"
                  >
                    Ver mais detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full md:w-[600px] h-full overflow-y-auto
      overflow-x-hidden scrollbar-hide bg-gradient-to-r from-background/95 to-transparent"
    >
      {sections.map((section, index) => (
        <StorySection
          key={section.id}
          section={section}
          onInView={(sectionId) => onSectionChange(sectionId)}
          isLast={index === sections.length - 1}
          onShowDetails={onShowDetails}
        />
      ))}
    </div>
  );
}