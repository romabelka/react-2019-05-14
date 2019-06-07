import React, { Component } from "react";
import Leaflet from "leaflet";
import * as PropTypes from "prop-types";
import "./restaurant-map.css";
import { connect } from "react-redux";
import { restaurantsSelector } from "../../selectors";

class RestaurantsMap extends Component {
  render() {
    return <div ref={this.setEl} className="map" />;
  }
  setEl = ref => {
    this.div = ref;
  };
  componentDidMount() {
    this.map = Leaflet.map(this.div, {
      center: [51.51847684708113, -0.13999606534701844],
      zoom: 12
    });
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  componentDidUpdate() {
    this.renderTiles();
  }
  renderTiles = () => {
    this.props.restaurants.forEach(({ location: { lat, lng } }) => {
      Leaflet.marker([lat, lng]).addTo(this.map);
    });
  };
}

RestaurantsMap.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired
};

export default connect(state => ({
  restaurants: restaurantsSelector(state)
}))(RestaurantsMap);
