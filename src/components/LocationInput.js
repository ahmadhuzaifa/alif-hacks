```javascript
import React, { useState } from 'react';
import { getCoordinates } from '../services/Geolocation';

const LocationInput = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGeolocationClick = async () => {
    const coords = await getCoordinates();
    setCoordinates(coords);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const coords = await getCoordinates(address);
    setCoordinates(coords);
  };

  return (
    <div id="location-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={handleInputChange}
          placeholder="Enter your address"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleGeolocationClick}>Use my current location</button>
      {coordinates.lat && coordinates.lng && (
        <p>Your coordinates: {coordinates.lat}, {coordinates.lng}</p>
      )}
    </div>
  );
};

export default LocationInput;
```