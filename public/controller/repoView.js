'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $repoTemplate = $('#repo-template'); // Best practice: Cache the DOM query if it's used more than once.

    $repoTemplate.find('ul').empty();
    $repoTemplate.show().siblings().hide();
  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.


  repoView.index = function() {
    ui();
    let render = Handlebars.compile($('#repo-template').html());
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);
