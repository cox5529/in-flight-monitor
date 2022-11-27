'use client';

import React from 'react';

import mapboxgl from 'mapbox-gl';

type Props = {};

const MapboxSetup = (props: Props) => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX!;
  return <></>;
};

export default MapboxSetup;
