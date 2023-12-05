setTimeout(function() {
    const element = document.getElementById("robot");
    element.classList.add("hidden");
}, 4995);

setTimeout(function() {
    const element2 = document.getElementById("robot2");
    element2.classList.remove("hidden");
}, 4980);

function play() {
    const audio = document.getElementById("audio");
    audio.muted = true;
    audio.play();
}

setTimeout(function() {
    play()
}, 5200);