```javascript
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapIntegration = ({ userLocation1, userLocation2, midpoint, restaurant }) => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: midpoint.lat, lng: midpoint.lng
  }

  return (
    <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker key="user1" position={userLocation1} />
        <Marker key="user2" position={userLocation2} />
        <Marker key="midpoint" position={midpoint} />
        <Marker key="restaurant" position={restaurant.location} />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapIntegration;
```