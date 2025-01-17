"use client";

import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Location } from '@/app/types/map';
import MapMarker from './MapMarker';

const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];

interface MapContainerProps {
  className?: string;
  center: google.maps.LatLngLiteral;
  zoom: number;
  mapTypeId: google.maps.MapTypeId;
  locations: Location[];
  activeLocationId?: string;
  onMarkerClick?: (location: Location) => void;
  onLoad?: (map: google.maps.Map) => void;
}

export default function MapContainer({
  className,
  center,
  zoom,
  mapTypeId,
  locations,
  activeLocationId,
  onMarkerClick,
  onLoad
}: MapContainerProps) {
  const { theme } = useTheme();

  return (
    <GoogleMap
      mapContainerClassName={cn("w-full h-full", className)}
      center={center}
      zoom={zoom}
      options={{
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        mapTypeId,
        styles: theme === 'dark' ? darkMapStyle : undefined
      }}
      onLoad={onLoad}
    >
      {locations.map((location) => (
        <MapMarker
          key={location.id}
          location={location}
          isActive={location.id === activeLocationId}
          onClick={onMarkerClick || (() => {})}
        />
      ))}
    </GoogleMap>
  );
}