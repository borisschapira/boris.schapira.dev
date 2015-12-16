//= require vendors/jquery.2.1.4.min
//= require vendors/algoliasearch.3.6.0.min
//= require vendors/algoliasearch.helper.2.1.0.min
//= require vendors/moment.2.10.3.min
//= require vendors/algolia
//= require vendors/cookies-monster
//= require vendors/elevator.min
//= require vendors/moment_fr
//= require vendors/featherlight.min
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
