import { LatLng } from '../types';

function toRad(num: number): number {
  return num * Math.PI / 180;
};

export default function getDistanceBetweenCoordinates(pos1: LatLng, pos2: LatLng): number {
  const R = 6371; // radius of earth in km
  const dLat = toRad(pos2.latitude - pos1.latitude);
  const dLon = toRad(pos2.longitude - pos1.longitude);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(pos1.latitude) * Math.cos(toRad(pos2.latitude))) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}