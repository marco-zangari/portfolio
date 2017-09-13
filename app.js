'use strict';

function Projects (title,date,contributor) {
  this.title = title;
  this.date = date;
  this.contributor = contributor;
}

var cfstudy = new Projects ('CFStudy','August 2017','stariel nothingnessbird Playingtygre');

// on Click
// make the cfstudy object
// append it to the list

var projectsRender = function(){
  var $newLi = $('#projects').clone();
  $newLi.attr('id', '').addClass('Project Title: ' + cfstudy.title);
  $newLi.attr('id','').addClass('Project Completed: ' + cfstudy.date);
  $newLi.attr('id','').addClass('Project Collaborators: ' + cfstudy.contributor);
};

projectsRender();
//   $newLi.find('h2')
//         .text(this.title);
//   $newLi.find('span')
//         .eq(1).text(this.date);
//   $newLi.find('.close')
//         .attr('data', this.id)
//         .on('click', deleteTask);
//
//   $('#task-list').append($newLi);
//
// $('projects').append

function WorkHistory (title,workPlace,startDate,endDate,responsibility) {
  this.title = title;
  this.workPlace = workPlace;
  this.startDate = startDate;
  this.endDate = endDate;
  this.responsibility = responsibility;
}

var seattleU = new WorkHistory ('adjunct professor','Seattle University','September 2010','June 2017','Curriculum Development, Research, Course Design, Teaching');

function Education (institution,place,degree) {
  this.institution = institution;
  this.place = place;
  this.degree = degree;
}

var uWash = new Education ('University of Washington','Seattle, WA','PhD');
