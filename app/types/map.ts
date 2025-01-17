export interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  type: 'attraction' | 'restaurant' | 'hotel';
  rating?: number;
  imageUrl?: string;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

export interface MapSection {
  id: string;
  title: string;
  description: string;
  location: Location;
  zoom: number;
}

export interface MapLayer {
  id: string;
  name: string;
  type: 'base' | 'overlay';
  visible: boolean;
}