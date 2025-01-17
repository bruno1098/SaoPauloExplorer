"use client";

import { useLoadScript } from '@react-google-maps/api';

const libraries: ("places" | "geometry" | "drawing" | "visualization")[] = ["places"];

export function useGoogleMaps() {
  return useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries
  });
}