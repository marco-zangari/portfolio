'use strict';

const projectView = {};

(function(module) {
  projectView.initIndexPage = function() {
    app.projectsArray.forEach(function(project) {
      $('#projects-area').append(project.toHtml(
        {}
      ))
    })
  }

  module.projectView = projectView;
})

$('.scroll-right-name').on('click', function(event){
  event.stopPropagation();
  $(this)
  .css({position: 'center'});
  if ($(this).position().center) {
    $(this).animate({
      left: ($(window).width() - $(this).width()) + 'px'
    }, 3000);
  } else {
    $(this).animate({
      left: '50px'
    }, 3000);
  }
})

$('.fa').on('click', function(){
  $('.burger').toggle();
});
