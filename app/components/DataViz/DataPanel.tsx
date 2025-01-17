"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Location } from '@/app/types/map';
import { getHistoricalData } from '@/app/services/historical';
import { getEnvironmentalData } from '@/app/services/environmental';

interface DataPanelProps {
  location: Location;
  onClose: () => void;
}

export default function DataPanel({ location, onClose }: DataPanelProps) {
  const [activeTab, setActiveTab] = useState('climate');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (activeTab) {
          case 'climate':
            const climateData = await getHistoricalData(location.id, 'climate');
            setData(climateData);
            break;
          case 'environmental':
            const envData = await getEnvironmentalData(location.id);
            setData(envData);
            break;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, [location.id, activeTab]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-0 w-full md:absolute md:bottom-24 md:left-1/2 md:-translate-x-1/2 
        md:w-[800px] bg-background/95 backdrop-blur-sm p-4 sm:p-6 rounded-t-lg md:rounded-lg 
        shadow-lg z-20 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('climate')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'climate' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
          >
            Clima Histórico
          </button>
          <button
            onClick={() => setActiveTab('environmental')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'environmental' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
          >
            Dados Ambientais
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-muted rounded-md transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="h-[300px] sm:h-[400px]">
        {data ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Carregando dados...</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}