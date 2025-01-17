import { useState, useCallback } from 'react';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import { MapLayer } from '../types/map';

const AVAILABLE_LAYERS: MapLayer[] = [
  {
    id: 'streets',
    name: 'Ruas',
    type: 'base',
    visible: true,
  },
  {
    id: 'satellite',
    name: 'Satélite',
    type: 'base',
    visible: false,
  },
  {
    id: 'terrain',
    name: 'Terreno',
    type: 'base',
    visible: false,
  }
];

export function useMapLayers() {
  const [layers, setLayers] = useState(AVAILABLE_LAYERS);

  const createLayer = useCallback((layerId: string) => {
    switch (layerId) {
      case 'streets':
        return new TileLayer({
          source: new OSM()
        });
      case 'satellite':
        return new TileLayer({
          source: new XYZ({
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          })
        });
      case 'terrain':
        return new TileLayer({
          source: new XYZ({
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
          })
        });
      default:
        return new TileLayer({
          source: new OSM()
        });
    }
  }, []);

  const toggleLayer = useCallback((layerId: string) => {
    setLayers(prevLayers => {
      if (prevLayers.find(l => l.id === layerId)?.type === 'base') {
        return prevLayers.map(layer => ({
          ...layer,
          visible: layer.id === layerId
        }));
      }
      return prevLayers.map(layer => 
        layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
      );
    });
  }, []);

  return {
    layers,
    createLayer,
    toggleLayer
  };
}