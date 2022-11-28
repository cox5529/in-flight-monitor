'use client';

import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import MapboxLocationMarker from './MapboxLocationMarker';

const MapboxMap = () => {
  const [map, setMap] = useState<mapboxgl.Map | undefined>();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
    });

    setMap(map);
  }, []);

  return (
    <>
      <div id='map' className='h-full'></div>
      <MapboxLocationMarker map={map} />
    </>
  );
};

export default MapboxMap;
