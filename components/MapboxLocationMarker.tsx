'use client';

import React, { useEffect, useState } from 'react';

import mapboxgl, { GeoJSONSource } from 'mapbox-gl';

import { calculatePointGivenDistanceAndDirection } from '../services/distanceService';

type Props = {
  map?: mapboxgl.Map;
};

const MapboxLocationMarker = ({ map }: Props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.on('styledata', () => setReady(true));
  }, [map]);

  useEffect(() => {
    if (!map || !ready) {
      return;
    }

    const control = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
      showUserLocation: true,
    });

    map.addControl(control);

    map.addSource('heading', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
        properties: {},
      },
    });

    map.addLayer({
      id: 'heading-arrow',
      type: 'line',
      source: 'heading',
    });

    control.on('geolocate', (ev?: any) => {
      if (!map) {
        return;
      }

      const position = ev as GeolocationPosition;

      const newPoint = calculatePointGivenDistanceAndDirection(
        position.coords.latitude,
        position.coords.longitude,
        (position.coords.speed ?? 1000) / 60,
        position.coords.heading ?? 0
      );

      const source = map.getSource('heading') as GeoJSONSource;
      source.setData({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [position.coords.longitude, position.coords.latitude],
            newPoint,
          ],
        },
        properties: {},
      });
    });

    return () => {
      control.off('geolocate');
    };
  }, [ready]);

  return <></>;
};

export default MapboxLocationMarker;
