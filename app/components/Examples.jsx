var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return(
      <div>
        <h3 className="text-center">Examples</h3>
        <p>Here are some examples</p>
        <ol>
          <li>
            <Link to='/?location=Melbourne'>Melbourne, Australia</Link>
          </li>
          <li>
            <Link to='/?location=Sydney'>Sydney, Australia</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
