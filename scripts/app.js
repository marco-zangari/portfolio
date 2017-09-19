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

projectsData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

projectsArray.forEach(function(someProject) {
  var newRawHTML = projectsTemplate(someProject);
  $('#projects-area').append(newRawHTML);}
);

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

// $(.'fa').on('click', function (){
//   $.'.burger').hide();
// });

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
