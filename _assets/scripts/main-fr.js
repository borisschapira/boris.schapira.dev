//= require analytics
//= require vendors/moment.2.10.3.min
//= require vendors/moment_fr

// Replace datetimes by moments relative values
moment.locale('fr');
document.querySelectorAll('time[datetime]').forEach(function(item){
    item.textContent = moment(item.getAttribute('datetime'), moment.ISO_8601).fromNow()
})

document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (item) {
        item.addEventListener('mouseover', playVideo, false);
        item.addEventListener('mouseout', pauseVideo, false);
    });

    function playVideo(e) {  
        this.play(); 
    }

    function pauseVideo(e) {
        this.pause(); 
    }
});