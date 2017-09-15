'use strict';

var projectsArray = [];

function Project (rawData) {
  this.title = rawData.title;
  this.date = rawData.date;
  this.contributor = rawData.contributor;
  this.url = rawData.projectUrl;
}

projectsData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

var projectsRender = function(){
  var $newLi = $('.template-projects').clone();
  $newLi.attr('id','title').html(projectsArray[0].title);
  $newLi.attr('id','project').text(projectsArray[0].date);
  $newLi.attr('id','collaborator').text(projectsArray[0].contributor);
  $newLi.attr('id','project-url').html(projectsArray[0].url);
  $('#projects').append($newLi);
};

projectsRender();


$('#projects').on('click', function(event){
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

// on Click
// make the cfstudy object
// append it to the list





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
