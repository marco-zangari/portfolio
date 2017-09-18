'use strict';

var projectsArray = [];

var sourceHTML = $('#projects-template').html();
var projectsTemplate = Handlebars.compile(sourceHTML);

function Project(projectsData){
  this.title = projectsData.title;
  this.date = projectsData.date;
  this.contributor = projectsData.contributor;
  this.url = projectsData.projectUrl;
}

projectsArray.forEach(function(someProject) {
  var newRawHTML = projectsTemplate(someProject);
  $('#projects-area').append(newRawHTML);}
);

projectsArray.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});
// Project.prototype.toHTML = function(){
//   var $newLi = $('.template-projects').clone();
//   $newLi.attr('class', 'rendered-projects');
//   $newLi.find('#title').text(this.title);
//   $newLi.find('#project').text(this.date);
//   $newLi.find('#collaborator').text(this.contributor);
//   $newLi.find('#project-url').html(`<a href="this.url">project link</a>`);
//   return $newLi;
// };


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
