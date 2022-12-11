'use client';

import React from 'react';

import { GeolocateControl } from 'react-map-gl';

const MapboxMapLocationMarker: React.FC = () => {
  return <GeolocateControl trackUserLocation={true} position='bottom-right' />;
};

export default MapboxMapLocationMarker;
