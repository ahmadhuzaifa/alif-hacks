```javascript
const sortRatings = (restaurants) => {
    return restaurants.sort((a, b) => b.rating - a.rating);
}

export default sortRatings;
```