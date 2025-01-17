"use client";

import React, { useCallback, useRef } from 'react';
import { Location } from '@/app/types/map';
import { useGoogleMaps } from './hooks/useGoogleMaps';
import MapContainer from './components/MapContainer';

interface MapViewProps {
  locations: Location[];
  activeLocationId?: string;
  onMarkerClick?: (location: Location) => void;
  className?: string;
  mapType?: google.maps.MapTypeId;
}

export interface MapViewRef {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleCenter: () => void;
}

const MapView = React.forwardRef<MapViewRef, MapViewProps>(({
  locations,
  activeLocationId,
  onMarkerClick,
  className,
  mapType = google.maps.MapTypeId.ROADMAP
}, ref) => {
  const mapRef = useRef<google.maps.Map>();
  const { isLoaded } = useGoogleMaps();

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  React.useImperativeHandle(ref, () => ({
    handleZoomIn: () => {
      if (mapRef.current) {
        mapRef.current.setZoom((mapRef.current.getZoom() || 0) + 1);
      }
    },
    handleZoomOut: () => {
      if (mapRef.current) {
        mapRef.current.setZoom((mapRef.current.getZoom() || 0) - 1);
      }
    },
    handleCenter: () => {
      if (mapRef.current) {
        mapRef.current.panTo({ lat: -23.5505, lng: -46.6333 });
        mapRef.current.setZoom(12);
      }
    }
  }));

  if (!isLoaded) return <div className="w-full h-full bg-muted animate-pulse" />;

  const activeLocation = locations.find(loc => loc.id === activeLocationId);
  const center = activeLocation 
    ? { lat: activeLocation.coordinates[0], lng: activeLocation.coordinates[1] }
    : { lat: -23.5505, lng: -46.6333 };

  return (
    <MapContainer
      className={className}
      center={center}
      zoom={15}
      mapTypeId={mapType}
      locations={locations}
      activeLocationId={activeLocationId}
      onMarkerClick={onMarkerClick}
      onLoad={onMapLoad}
    />
  );
});

MapView.displayName = 'MapView';

export default MapView;