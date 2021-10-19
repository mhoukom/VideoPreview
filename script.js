console.log("page loaded...");

// var x = document.getElementById("video1");

function playVid(video1) {
    video1.play();
}

function pauseVid(video1) {
    video1.pause();
    video1.currentTime = 0
}