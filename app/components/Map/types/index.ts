export interface MapViewProps {
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