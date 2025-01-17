import { MapTypeId } from '@react-google-maps/api';

export interface MapViewProps {
  locations: Location[];
  activeLocationId?: string;
  onMarkerClick?: (location: Location) => void;
  className?: string;
  mapType?: MapTypeId;
}

export interface MapViewRef {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleCenter: () => void;
}