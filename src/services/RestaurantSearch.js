```javascript
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const searchRestaurants = async (midpoint) => {
  const { lat, lng } = midpoint;
  const radius = 5000; // 5km radius
  const type = 'cafe'; // type of place to search for

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error occurred while fetching restaurants:', error);
  }
};
```