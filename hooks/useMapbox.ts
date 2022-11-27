import { useMemo } from 'react';

import { uniqueId } from 'lodash';
import mapboxgl from 'mapbox-gl';

export function useMapbox(id: string): mapboxgl.Map {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX!;

  return useMemo(() => {
    return new mapboxgl.Map({
      container: id,
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE!,
    });
  }, []);
}
