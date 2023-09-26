// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
// = require action_cable
// = require_self
// = require_tree ./channels

/* eslint-disable no-undef, no-unused-expressions */
(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();
}).call(this);
/* eslint-enable no-undef, no-unused-expressions */
