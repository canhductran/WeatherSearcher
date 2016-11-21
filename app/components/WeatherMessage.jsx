var React = require('react');

var WeatherMessage = (props) => {
  return(
    <h4>It is {props.temp} Celsius degree in {props.location}</h4>
  )
};

module.exports = WeatherMessage;
