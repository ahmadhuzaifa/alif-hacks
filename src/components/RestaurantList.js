```javascript
import React from 'react';
import RestaurantDetails from './RestaurantDetails';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.restaurants !== prevProps.restaurants) {
            this.setState({
                restaurants: this.props.restaurants
            });
        }
    }

    render() {
        return (
            <div id="restaurant-list">
                {this.state.restaurants.map((restaurant, index) => (
                    <RestaurantDetails key={index} restaurant={restaurant} />
                ))}
            </div>
        );
    }
}

export default RestaurantList;
```