```javascript
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

export const getCoordinates = async (address) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
    if (response.data.status === 'OK') {
      return response.data.results[0].geometry.location;
    }
    throw new Error('Unable to fetch coordinates');
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, (error) => {
        reject(error);
      });
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};
```