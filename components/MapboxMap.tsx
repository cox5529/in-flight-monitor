'use client';

import React from 'react';

import { LngLatBoundsLike } from 'mapbox-gl';
import { Map } from 'react-map-gl';

import MapboxMapLocationMarker from './MapboxMapLocationMarker';
import MapboxMapRoute from './MapboxMapRoute';

const defaultMapBounds: LngLatBoundsLike = [-130, 20, -60, 50];

const MapboxMap = () => {
  return (
    <>
      <Map
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        initialViewState={{ bounds: defaultMapBounds }}
      >
        <MapboxMapLocationMarker />
        <MapboxMapRoute route={['KLIT', 'KATL', 'KJFK']} />
      </Map>
    </>
  );
};

export default MapboxMap;
