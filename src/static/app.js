var React = require('react');

var Hello = React.createClass({
    render: function(){
        return <h1>Hello world! </h1>;
    }
});

React.render(
    <Hello />,
    document.getElementById('example')
)
