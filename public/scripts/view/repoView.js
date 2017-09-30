'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  repoView.index = function() {
    let render = Handlebars.compile($('#repo-template').html());
    $('#repo-area').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
