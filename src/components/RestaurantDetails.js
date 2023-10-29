```javascript
import React from 'react';

class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurant !== prevProps.restaurant) {
      this.setState({
        restaurant: this.props.restaurant,
      });
    }
  }

  render() {
    const { restaurant } = this.state;

    if (!restaurant) {
      return <div>Loading...</div>;
    }

    return (
      <div id="restaurant-details">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.address}</p>
        <p>Rating: {restaurant.rating}</p>
      </div>
    );
  }
}

export default RestaurantDetails;
```