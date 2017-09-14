'use strict';

var projectsRender = function(){
  var $newLi = $('#projects').clone();
  $newLi.attr('id','').text('Project Title: ' + cfstudy.title);
  $newLi.attr('id','').text('Project Completed: ' + cfstudy.date);
  $newLi.attr('id','').text('Project Collaborators: ' + cfstudy.contributor);
  $newLi.attr('id','').html('Project Link: ' + cfstudy.url);
  
};

projectsRender();


$('#projects').on('click', function(event){
  event.stopPropagation();
  $(this)
    .css({position: 'absolute'});
  if ($(this).position().left < 10) {
    $(this).animate({
      left: ($(window).width() - $(this).width()) + 'px'
    }, 5000).text('On the right!');
  } else {
    $(this).animate({
      left: '8px'
    }, 5).text('On the left!');
  }
})
