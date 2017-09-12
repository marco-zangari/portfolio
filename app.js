'use strict';

function Projects (title,date,contributor) {
  this.title = title;
  this.date = date;
  this.contributor = contributor;
}

var cfstudy = new Projects ('CFStudy','August 2017','stariel nothingnessbird Playingtygre');

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
