```javascript
import React, { useEffect, useRef } from 'react';
import { useGoogleMaps } from '../services/MapIntegration';

const Map = ({ user1Location, user2Location, midpoint, restaurant }) => {
  const mapRef = useRef(null);
  const { loadMap, addMarker } = useGoogleMaps();

  useEffect(() => {
    if (user1Location && user2Location && midpoint && restaurant) {
      const map = loadMap(mapRef.current, midpoint);
      addMarker(map, user1Location, 'User 1');
      addMarker(map, user2Location, 'User 2');
      addMarker(map, midpoint, 'Midpoint');
      addMarker(map, restaurant.location, 'Restaurant');
    }
  }, [user1Location, user2Location, midpoint, restaurant, loadMap, addMarker]);

  return <div id="map-container" ref={mapRef}></div>;
};

export default Map;
```