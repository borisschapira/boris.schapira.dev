//= require vendors/jquery.2.1.4.min
//= require vendors/featherlight.min

//= require vendors/cookies-monster

//= require vendors/elevator.min

//= require analytics

/* Elevator.js */
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator'),
    targetElement: document.querySelector('#top'),
    mainAudio: '/assets/music/elevator.mp3',
    endAudio: '/assets/music/ding.mp3'
  });
}
