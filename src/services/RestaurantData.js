```javascript
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

export const getRestaurantData = async (location, radius) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=restaurant&key=${API_KEY}`
    );

    if (response.data.status === 'OK') {
      return response.data.results;
    } else {
      throw new Error('Failed to fetch restaurant data');
    }
  } catch (error) {
    console.error(error);
  }
};
```