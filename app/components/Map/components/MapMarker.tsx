"use client";

import React from 'react';
import { Marker } from '@react-google-maps/api';
import { Location } from '@/app/types/map';

interface MapMarkerProps {
  location: Location;
  isActive: boolean;
  onClick: (location: Location) => void;
}

export default function MapMarker({ location, isActive, onClick }: MapMarkerProps) {
  return (
    <Marker
      position={{ lat: location.coordinates[0], lng: location.coordinates[1] }}
      onClick={() => onClick(location)}
      animation={isActive ? google.maps.Animation.BOUNCE : undefined}
    />
  );
}