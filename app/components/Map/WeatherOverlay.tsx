"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';
import { Location } from '@/app/types/map';
import { getWeather } from '@/app/services/weather';

interface WeatherOverlayProps {
  location: Location;
  className?: string;
}

export default function WeatherOverlay({ location, className }: WeatherOverlayProps) {
  const [weather, setWeather] = useState<{ temperature: number; condition: string } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(location.coordinates[0], location.coordinates[1]);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [location]);

  if (!weather) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg ${className}`}
      >
        <p className="text-sm text-muted-foreground">Carregando dados do clima...</p>
      </motion.div>
    );
  }

  const getWeatherIcon = () => {
    switch (weather.condition.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-400" />;
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-400" />;
      default:
        return <Cloud className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg ${className}`}
    >
      <div className="flex items-center gap-3">
        {getWeatherIcon()}
        <div>
          <div className="flex items-center gap-1">
            <Thermometer className="w-4 h-4" />
            <p className="text-2xl font-bold">{weather.temperature}°C</p>
          </div>
          <p className="text-sm text-muted-foreground capitalize">{weather.condition}</p>
        </div>
      </div>
    </motion.div>
  );
}