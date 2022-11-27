'use client';

import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

const MapboxMap = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    setMap(map);
  }, []);

  return <div id='map' className='h-full'></div>;
};

export default MapboxMap;
