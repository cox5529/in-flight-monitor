'use client';

import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

type MapProps = {};

const AirportMap = (props: MapProps) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(
    () =>
      setMap(
        new mapboxgl.Map({
          container: 'map',
          style: process.env.NEXT_PUBLIC_MAPBOX_STYLE!,
        })
      ),
    []
  );

  return <div id='map' className='h-full'></div>;
};

export default AirportMap;
