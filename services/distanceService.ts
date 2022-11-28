export function calculatePointGivenDistanceAndDirection(
  latitude: number,
  longitude: number,
  distance: number,
  heading: number
): [number, number] {
  const lat = (Math.PI / 180.0) * latitude;
  const lon = (Math.PI / 180.0) * longitude;
  const direction = ((heading - 90) * Math.PI) / 180.0;
  distance /= 40075017 / (2 * Math.PI);

  console.log([lon, lat], distance, direction);

  const newLatitude = Math.asin(
    Math.sin(lat) * Math.cos(distance) +
      Math.cos(lat) * Math.sin(distance) * Math.cos(direction)
  );

  const newLongitude =
    Math.cos(newLatitude) === 0
      ? lon
      : ((lon -
          Math.asin(
            (Math.sin(direction) * Math.sin(distance)) / Math.cos(newLatitude)
          ) +
          Math.PI) %
          (2 * Math.PI)) -
        Math.PI;

  return [newLongitude * 180.0 / Math.PI, newLatitude * 180.0 / Math.PI];
}
