'use strict';

let projectsArray = [];

let sourceHTML = $('#projects-template').html();
let projectsTemplate = Handlebars.compile(sourceHTML);

function Project(projectsData){
  this.title = projectsData.title;
  this.date = projectsData.date;
  this.contributor = projectsData.contributor;
  this.url = projectsData.projectUrl;
}

Project.loadAll = function(ele) {
  projectsData.forEach(function(ele) {
    projectsArray.all.push(new Project(ele));
  })
}

Article.fetchAll = function() {
  if (localStorage.projectsData) {
    Article.loadAll();
  } else {
    $.get('data/data.json', function (response) {
      localStorage.setItem('projectsData', JSON.stringify(resonse));
      Project.loadAll(JSON.parse(localStorage.projectsData));
      Project
    });}
}

$.get('data/hackerIpsum.json', function(response) {
      localStorage.setItem('rawData', JSON.stringify(response));
      Article.loadAll(JSON.parse(localStorage.rawData)); //DONE: What do we pass in to loadAll()?
      articleView.initIndexPage();

projectsArray.forEach(function(someProject) {
  let newRawHTML = projectsTemplate(someProject);
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
