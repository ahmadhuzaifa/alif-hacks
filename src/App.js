```javascript
import React, { Component } from 'react';
import Login from './components/Login';
import LocationInput from './components/LocationInput';
import Map from './components/Map';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userLocation1: null,
      userLocation2: null,
      midpoint: null,
      restaurants: [],
      selectedRestaurant: null,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  }

  setUserLocation1 = (location) => {
    this.setState({ userLocation1: location });
  }

  setUserLocation2 = (location) => {
    this.setState({ userLocation2: location });
  }

  setMidpoint = (midpoint) => {
    this.setState({ midpoint });
  }

  setRestaurants = (restaurants) => {
    this.setState({ restaurants });
  }

  setSelectedRestaurant = (restaurant) => {
    this.setState({ selectedRestaurant: restaurant });
  }

  render() {
    const { user, userLocation1, userLocation2, midpoint, restaurants, selectedRestaurant } = this.state;

    return (
      <div className="App">
        <Login setUser={this.setUser} />
        {user && (
          <>
            <LocationInput setUserLocation={this.setUserLocation1} />
            <LocationInput setUserLocation={this.setUserLocation2} />
            {userLocation1 && userLocation2 && (
              <>
                <Map userLocation1={userLocation1} userLocation2={userLocation2} midpoint={midpoint} selectedRestaurant={selectedRestaurant} />
                <RestaurantList restaurants={restaurants} setSelectedRestaurant={this.setSelectedRestaurant} />
                {selectedRestaurant && <RestaurantDetails restaurant={selectedRestaurant} />}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
```