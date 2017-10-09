'use strict';

var app = app || {};

(function(module){

  const repoView = {};

  const showRepos = function(){

    let $projects = $('#projects-github');

    $projects.find('ul').empty();
    $projects.show().siblings().hide();
    $('nav').show();
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function(){
    showRepos();
    $('#projects-github ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
