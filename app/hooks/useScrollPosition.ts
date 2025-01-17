"use client";

import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = document.querySelector('.story-container');
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
}