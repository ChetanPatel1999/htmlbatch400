let song = document.querySelector("#song");
let progress = document.querySelector("#progress");
let control = document.querySelector("#control");
let updateInterval;
song.onloadedmetadata = () => {
    progress.value = song.currentTime;
    progress.max = song.duration;
}

control.onclick = () => {
    if (control.classList.contains("fa-play")) {
        song.play();
        control.classList.add("fa-pause");
        control.classList.remove("fa-play");
        updateInterval = setInterval(() => {
            progress.value = song.currentTime;
        }, 500)
    }
    else {
        song.pause();
        control.classList.add("fa-play");
        control.classList.remove("fa-pause");
        clearInterval(updateInterval);
    }
}

progress.onchange = () => {
    song.currentTime = progress.value;
    song.play();
    clearInterval(updateInterval);
    updateInterval = setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
}





