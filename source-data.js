'use strict';

var projectsRender = function(){
  var $newLi = $('#projects').clone();
  $newLi.attr('id','').addClass('Project Title: ' + cfstudy.title);
  $newLi.attr('id','').addClass('Project Completed: ' + cfstudy.date);
  $newLi.attr('id','').addClass('Project Collaborators: ' + cfstudy.contributor);
};

projectsRender();


$('#button').on('click', function(event){
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



var cfstudy = new Projects ('CFStudy','August 2017','stariel nothingnessbird Playingtygre','https://github.com/marco-zangari/cfstudybuddies');
var busmall = new Projects ('Bus-Mall', 'August 2017','','https://github.com/marco-zangari/bus-mall')
