```javascript
const calculateMidpoint = (location1, location2) => {
    const lat1 = location1.lat;
    const lon1 = location1.lng;
    const lat2 = location2.lat;
    const lon2 = location2.lng;

    const dLon = (lon2 - lon1) * Math.PI / 180;

    //convert to radians
    const lat1r = lat1 * Math.PI / 180;
    const lat2r = lat2 * Math.PI / 180;
    const lon1r = lon1 * Math.PI / 180;

    const Bx = Math.cos(lat2r) * Math.cos(dLon);
    const By = Math.cos(lat2r) * Math.sin(dLon);
    const lat3 = Math.atan2(Math.sin(lat1r) + Math.sin(lat2r), Math.sqrt((Math.cos(lat1r) + Bx) * (Math.cos(lat1r) + Bx) + By * By));
    const lon3 = lon1r + Math.atan2(By, Math.cos(lat1r) + Bx);

    //convert back to degrees
    const midpoint = {
        lat: lat3 * 180 / Math.PI,
        lng: lon3 * 180 / Math.PI
    };

    return midpoint;
}

export default calculateMidpoint;
```