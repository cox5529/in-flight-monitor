'use client';

import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

type Props = { location?: GeolocationCoordinates };

const MapboxMap = (props: Props) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [userMarker, setUserMarker] = useState<mapboxgl.Marker | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (!props.location || !map) {
      return;
    }

    if (!userMarker) {
      const marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
      setUserMarker(marker);
    }
  }, [map, props.location]);

  useEffect(() => {
    if (!props.location || !userMarker) {
      return;
    }

    userMarker.setLngLat([props.location.longitude, props.location.latitude]);
  }, [userMarker, props.location]);

  return <div id='map' className='h-full'></div>;
};

export default MapboxMap;
