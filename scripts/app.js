'use strict';

var projectsArray = [];

function Project (rawData) {
  this.title = rawData.title;
  this.date = rawData.date;
  this.contributor = rawData.contributor;
  this.url = rawData.projectUrl;
}

Project.prototype.toHTML = function(){
  var $newLi = $('.template-projects').clone();
  $newLi.attr('class', 'rendered-projects');
  $newLi.find('#title').text(this.title);
  $newLi.find('#project').text(this.date);
  $newLi.find('#collaborator').text(this.contributor);
  $newLi.find('#project-url').html(`<a href="this.url">project link</a>`);
  return $newLi;
};

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

projectsData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

projectsArray.forEach(function(tugboat){
  $('#projects').append(tugboat.toHTML());
});

$('.move-right').on('click', function(event){
  event.stopPropagation();
  $(this)
    .css({position: 'center'});
  if ($(this).position().center) {
    $(this).animate({
      left: ($(window).width() - $(this).width()) + 'px'
    }, 5000);
  } else {
    $(this).animate({
      left: '75px'
    }, 5000);
  }
})
// function projectsHandler(event) {
//   $('#projects').click(function(event) {
//     $('#rendered-projects').toggle(600, function(event) {
//   });
//   });
// }
//
// function projectsHandler(event) {
//   event.preventDefault();
//   $('#projects').on('click', event);
//   $('.rendered-projects').show();
// };
//
// function removeProjects(event) {
//   event.preventDefault();
//   $('#projects').off('click', event);
//   $('.template-projects').hide();
// };


// function WorkHistory (title,workPlace,startDate,endDate,responsibility) {
//   this.title = title;
//   this.workPlace = workPlace;
//   this.startDate = startDate;
//   this.endDate = endDate;
//   this.responsibility = responsibility;
// }
//
// var seattleU = new WorkHistory ('adjunct professor','Seattle University','September 2010','June 2017','Curriculum Development, Research, Course Design, Teaching');
//
// function Education (institution,place,degree) {
//   this.institution = institution;
//   this.place = place;
//   this.degree = degree;
// }
//
// var uWash = new Education ('University of Washington','Seattle, WA','PhD')
