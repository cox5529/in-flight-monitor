'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { Layer, Source } from 'react-map-gl';

type Props = {
  route: string[];
};

export interface NavaidGeoJson extends GeoJSON.Feature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: number[];
  };
  properties: {
    state: string;
    country: string;
    lastupdate: string;
    name: string;
    cmt: string;
    type: string;
    hasfuel: string;
    address: string;
  };
}

const MapboxMapRoute: React.FC<Props> = ({ route }: Props) => {
  const [data, setData] = useState<NavaidGeoJson[]>([]);
  const routeJson = useMemo<GeoJSON.FeatureCollection<GeoJSON.Point>>(
    () => ({
      type: 'FeatureCollection',
      features: route
        .map((x) => data.find((d) => d.properties.name === x))
        .filter((x) => !!x) as NavaidGeoJson[],
    }),
    [data, route]
  );

  const routeLine = useMemo<GeoJSON.GeoJSON>(
    () => ({
      type: 'LineString',
      coordinates: routeJson.features.map((x) => x.geometry.coordinates),
    }),
    [routeJson.features]
  );

  useEffect(() => {
    import('../assets/navaids.json').then(({ default: x }) =>
      setData(x as NavaidGeoJson[])
    );
  }, []);

  return (
    <>
      <Source id='route-line-source' type='geojson' data={routeLine}>
        <Layer
          id='route-line'
          type='line'
          layout={{ 'line-cap': 'round' }}
          source='route'
          paint={{
            'line-color': '#666',
            'line-width': 4,
          }}
        />
      </Source>
      <Source id='route' type='geojson' data={routeJson}>
        <Layer
          id='route-markers'
          type='symbol'
          layout={{
            'text-field': ['get', 'name'],
            'text-offset': [0, -1],
            'icon-image': 'circle-white-2',
            'icon-size': 0.8
          }}
        />
      </Source>
    </>
  );
};

export default MapboxMapRoute;
