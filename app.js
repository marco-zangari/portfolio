'use strict';

function Projects (title,date,url,contributor) {
  this.title = title;
  this.date = date;
  this.url = url;
  this.contributor = contributor;
}

var cfstudy = ('CFStudy','August 2017','stariel nothingnessbird Playingtygre');

var project = new Projects (title,date,url);

function WorkHistory (title,workPlace) {
  this.title = title;
  this.workPlace = workPlace;
  this.startDate = startDate;
  this.endDate = endDate;
  this.responsibility = responsibility;
}

var work = new WorkHistory (title,workPlace);

function Education (institution,place,degree) {
  this.institution = institution;
  this.place = place;
  this.degree = degree;
}

var education = new Education (institution,place,degree);
