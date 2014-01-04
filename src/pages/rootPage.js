/** @jsx React.DOM */

var React = require('react');

var rootPage = React.createClass({
	getInitialState: function() {
		return {force:false};
	},

	handleClick: function() {
		this.setState({force: true});
	},

	render: function() {
		return (
			<Message>
				<p>This is a demo </p>
			</Message>
		);
	}


});

module exports = rootPage;

