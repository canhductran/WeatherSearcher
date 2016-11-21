var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a small weather application built in React along with other open source frameworks.</p>
      <p>Some of them are:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="https://openweathermap.org/">OpenWeatherMap</a></li>
        <li><a href="http://foundation.zurb.com/">Foundation</a></li>
      </ul>
    </div>
  )
};

module.exports = About;
