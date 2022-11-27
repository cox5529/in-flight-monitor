'use client';

import React from 'react';

import mapboxgl from 'mapbox-gl';

const MapboxSetup = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX!;
  return <></>;
};

export default MapboxSetup;
