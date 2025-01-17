"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MapControls from './MapControls';
import StoryProgress from './StoryProgress';
import LayerControl from './LayerControl';
import WeatherOverlay from './WeatherOverlay';
import LocationDetails from './LocationDetails';
import ScrollIndicator from '../Story/ScrollIndicator';
import DataPanel from '../DataViz/DataPanel';
import StoryContainer from '../Story/StoryContainer';
import MapLoadingScreen from './MapLoadingScreen';
import { SP_LOCATIONS } from '@/app/data/locations';
import { MAP_SECTIONS } from '@/app/data/sections';
import type { MapViewRef } from './types';
import { useGoogleMaps } from './hooks/useGoogleMaps';

const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => <MapLoadingScreen />,
});

export default function MapExperience() {
  const [activeSection, setActiveSection] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showDataPanel, setShowDataPanel] = useState(false);
  const [showLocationDetails, setShowLocationDetails] = useState(false);
  const [mapType, setMapType] = useState<google.maps.MapTypeId | undefined>(undefined);
  const mapRef = React.useRef<MapViewRef>(null);
  const { isLoaded } = useGoogleMaps();

  useEffect(() => {
    if (isLoaded) {
      setMapType(google.maps.MapTypeId.ROADMAP);
    }
  }, [isLoaded]);

  const handleSectionChange = (sectionId: string) => {
    const index = MAP_SECTIONS.findIndex(section => section.id === sectionId);
    if (index !== -1) {
      setActiveSection(index);
    }
  };

  const handleShowDetails = () => {
    setShowLocationDetails(true);
  };

  const handleMapTypeChange = (type: string) => {
    switch (type) {
      case 'satellite':
        setMapType(google.maps.MapTypeId.SATELLITE);
        break;
      case 'terrain':
        setMapType(google.maps.MapTypeId.TERRAIN);
        break;
      default:
        setMapType(google.maps.MapTypeId.ROADMAP);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <MapView
        ref={mapRef}
        locations={SP_LOCATIONS}
        activeLocationId={MAP_SECTIONS[activeSection].location.id}
        onMarkerClick={() => setShowLocationDetails(true)}
        mapType={mapType}
      />

      <StoryContainer
        sections={MAP_SECTIONS}
        onSectionChange={handleSectionChange}
        onShowDetails={handleShowDetails}
      />

      <ScrollIndicator />

      <motion.button
        onClick={() => setShowControls(!showControls)}
        className="fixed top-4 right-4 z-30 p-2 bg-background/80 backdrop-blur-sm rounded-full 
          shadow-lg sm:absolute"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showControls ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-0 right-0 sm:absolute sm:top-16 sm:right-4 z-20 
              w-full sm:w-auto p-4 sm:p-0 bg-background/80 sm:bg-transparent 
              backdrop-blur-sm sm:backdrop-blur-none space-y-4"
          >
            <MapControls
              onZoomIn={() => mapRef.current?.handleZoomIn()}
              onZoomOut={() => mapRef.current?.handleZoomOut()}
              onCenter={() => mapRef.current?.handleCenter()}
              onDataToggle={() => setShowDataPanel(!showDataPanel)}
            />
            <div className="hidden sm:block">
              <LayerControl onMapTypeChange={handleMapTypeChange} />
              <WeatherOverlay location={MAP_SECTIONS[activeSection].location} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLocationDetails && (
          <LocationDetails
            location={MAP_SECTIONS[activeSection].location}
            onClose={() => setShowLocationDetails(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDataPanel && (
          <DataPanel
            location={MAP_SECTIONS[activeSection].location}
            onClose={() => setShowDataPanel(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10 sm:absolute sm:bottom-8">
        <StoryProgress
          currentSection={activeSection}
          totalSections={MAP_SECTIONS.length}
          onSectionChange={setActiveSection}
        />
      </div>
    </div>
  );
}