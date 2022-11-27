'use client';

import React, { useEffect, useState } from 'react';

import MapboxMap from './MapboxMap';

const AirportMap = () => {
  const [location, setLocation] = useState<
    GeolocationCoordinates | undefined
  >();

  const updatePosition = (coordiantes: GeolocationPosition) => {
    console.log(coordiantes);
    setLocation(coordiantes.coords);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(updatePosition, () => {}, {
      enableHighAccuracy: true,
    });

    const watch = navigator.geolocation.watchPosition(
      updatePosition,
      () => {},
      { enableHighAccuracy: true }
    );
    return navigator.geolocation.clearWatch(watch);
  }, []);

  return <MapboxMap location={location} />;
};

export default AirportMap;
