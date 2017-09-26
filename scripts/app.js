'use strict';

var projectsArray = [];

function Project(rawData){
  this.title = rawData.title;
  this.date = rawData.date;
  this.contributor = rawData.contributor;
  this.url = rawData.projectUrl;
}

Project.prototype.toHtml = function() {
  let sourceHTML = $('#projects-template').html();
  let projectsTemplate = Handlebars.compile(sourceHTML);
  return projectsTemplate(this);
}

Project.loadAll = function(listOfObjects) {
  listOfObjects.forEach(function (project) {
    projectsArray.push(new Project(project));
  })
  renderProjects(projectsArray);
}

Project.fetchAll = function() {
  if (localStorage.projectsData) {
    Project.loadAll(JSON.parse(localStorage.projectsData));
  } else {
    $.get('/data/data.json', function (response) {
      localStorage.setItem('projectsData', JSON.stringify(response));
      Project.loadAll(response);
    });
  }
}

Project.fetchAll();

function renderProjects (projectsArrayObj) {
  console.log(projectsArrayObj);
  debugger;
  projectsArrayObj.forEach(function(someProject) {
    $('#projects-area').append(someProject.toHtml())
  })
}

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
