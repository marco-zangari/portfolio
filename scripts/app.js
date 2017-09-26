'use strict';

let projectsArray = [];

let sourceHTML = $('#projects-template').html();
let projectsTemplate = Handlebars.compile(sourceHTML);

function Project(rawData){
  this.title = rawData.title;
  this.date = rawData.date;
  this.contributor = rawData.contributor;
  this.url = rawData.projectUrl;
}

Project.prototype.toHtml = function () {
  debugger;
  projectsTemplate(this)
  console.log(this);
};

Project.loadAll = function(ele) {
  console.log(ele);
  projectsArray.push(new Project(ele));
}

Project.fetchAll = function() {
  if (localStorage.projectsData) {
    Project.loadAll(JSON.parse(localStorage.projectsData));
  } else {
    $.get('../data/data.json', function (response) {
      localStorage.setItem('projectsData', JSON.stringify(response));
      Project.loadAll();
    });}
}

Project.fetchAll();

projectsArray.forEach(function(someProject) {
  let newRawHTML = projectsTemplate(someProject);
  $('#projects-area').append(newRawHTML);}
);

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
