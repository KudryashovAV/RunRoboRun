const element = document.getElementById("robot");
const element2 = document.getElementById("robot2");
const animationDelay = 5000;

function play() {
    const audio = document.getElementById("audio");
    audio.play();
}

let showAnimation = ()  => {
    const toppx = window.scrollY

    element.classList.remove("hidden");
    element.classList.add("robot");
    element.style.top = toppx + 200 + "px"
    setTimeout(function() {
        element.classList.add("hidden");
    }, 4990);
    setTimeout(function() {
        element2.classList.remove("hidden");
        element2.classList.add("robot2");
        element2.style.top = toppx + 200 + "px"
        play()
    }, 4980);
}
let timer = setTimeout(showAnimation, animationDelay);


let timerUpdate = () => {
    element2.classList.add("hidden");
    element2.classList.remove("robot2");
    element.classList.add("hidden");
    element.classList.remove("robot");
    clearTimeout(timer);
    timer = setTimeout(showAnimation, animationDelay);
}

window.addEventListener("mousedown", ()=> {
    console.log("timerUpdate");
    timerUpdate();
})


