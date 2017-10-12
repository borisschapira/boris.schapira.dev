document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (item) {
        item.addEventListener('mouseover', playVideo, false);
        item.addEventListener('touchstart', playVideo, false);
        item.addEventListener('touchend', pauseVideo, false);
        item.addEventListener('mouseout', pauseVideo, false);
    });

    function playVideo(e) {  
        this.play();
    }

    function pauseVideo(e) {
        this.pause();
    }

    function toggleVideo(e) {
        this.paused ? this.play() : this.pause();
    }
});