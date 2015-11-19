//= require vendors/algolia
//= require vendors/cookies-monster
//= require vendors/elevator.min
//= require vendors/moment_fr
//= require analytics

UpUp.start({
  'content-url': 'offline.html',
  'assets': ['/css/main.css', '/assets/images/shared/man-beach-love-sand.jpg']
});

/* Elevator.js */
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator'),
    targetElement: document.querySelector('#top'),
    mainAudio: '/assets/music/elevator.mp3',
    endAudio: '/assets/music/ding.mp3'
  });
}
