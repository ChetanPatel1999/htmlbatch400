let displayTimer = document.querySelector(".display-timer");
let start = document.querySelector("#start");
let lap = document.querySelector("#lap");
let reset = document.querySelector("#reset");

let msecs = 0;
let secs = 0;
let mints = 0;
let timerId = null;
let id = 0;
function timer() {
    msecs++;
    if (msecs == 100) {
        msecs = 0;
        secs++;
    }
    if (secs == 60) {
        secs = 0;
        mints++;
    }

    let strmsecs = msecs < 10 ? `0${msecs}` : msecs;
    let strsecs = secs < 10 ? `0${secs}` : secs;
    let strmints = mints < 10 ? `0${mints}` : mints;

    displayTimer.innerText = `${strmints} : ${strsecs} : ${strmsecs}`;
}


start.addEventListener("click", () => {
    if (timerId == null) {
        timerId = setInterval(timer, 10)
        start.innerText = "Stop";
        start.style.backgroundColor = "red";
        reset.style.visibility = "visible";
        lap.style.visibility = "visible";
    }
    else {
        clearInterval(timerId);
        timerId = null;
        start.innerText = "Start";
        start.style.backgroundColor = "green";
        lap.style.visibility = "hidden";
    }
})

lap.addEventListener("click", () => {
    if (id == 0) {
        let ul = document.createElement("ul");
        let body = document.querySelector("body");
        body.append(ul);
        let li = document.createElement("li");
        let res = "#" + (++id) + "   " + displayTimer.innerText;
        let pre = document.createElement("pre");
        pre.innerText = res;
        li.append(pre);
        ul.append(li);
    }
    else {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        let res = "#" + (++id) + "   " + displayTimer.innerText;
        let pre = document.createElement("pre");
        pre.innerText = res;
        li.append(pre);
        ul.append(li);
    }
})

reset.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    secs = msecs = mints = 0;
    displayTimer.innerText = `00 : 00 : 00`;
    start.innerText = "Start";
    start.style.backgroundColor = "green";
    reset.style.visibility = "hidden";
    lap.style.visibility = "hidden";
    document.querySelector("ul").remove();
    id = 0;
})