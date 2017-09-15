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
  $newLi.find('#project-url').html(`<a href="this.url">PROJECT</a>`);
  return $newLi;
};

projectsArray.forEach(function(tugboat){
  // tugboat.toHTML();
  $('#projects').append(tugboat.toHTML());
});

projectsData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

function submitProjects(event) {
  event.preventDefault();
  $('#projects').on('click', event);
  $('.rendered-projects').show();
};

function removeProjects(event) {
  event.preventDefault();
  $('#projects').off('click', event);
  $('.template-projects').hide();
};

//     {
//   if another click event happens, turn off projects
//   if (another click happens,
//     };
// };



  // function submitProjects (event){
  //   event.preventDefault();
  //   var taskProjects = $('#template-projects')
  //                    .find('[name="task"]')
  //                    .val();
  //   var taskDate = $('#task-form')
  //                    .find('[name="date"]')
  //                    .val();
  //   theForm.reset();
  //   $('.task-item').remove();
  //   new Task(taskText, taskDate);
  //   listTasks();
  // }

  // event.stopPropagation();
  // $(this)
  //   .css({position: 'absolute'});
  // if ($(this).position().left < 10) {
  //   $(this).animate({
  //     left: ($(window).width() - $(this).width()) + 'px'
  //   }, 5000).text('On the right!');
  // } else {
  //   $(this).animate({
  //     left: '8px'
  //   }, 5).text('On the left!');
  // }

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
