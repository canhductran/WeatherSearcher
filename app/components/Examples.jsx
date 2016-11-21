var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="text-center page-title">Examples</h1>
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
