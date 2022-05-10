const header = document.getElementById("header");
header.style.opacity = "0";

const button = document.getElementById("more");
button.style.opacity = "0";

const pointer = document.getElementById("pointer");
pointer.style.opacity = "0";

const about = document.getElementById("about");
const landing = document.getElementById("landing");
let position = 100;
let position2 = 0;

const body = document.getElementById("body");

let atBottom = false;

let mtInterval;

setTimeout(animation, 1050);
setTimeout(animation2, 2050);
setTimeout(animation3, 3500);

function animation() {
    header.style.opacity = "1";
}

function animation2() {
    button.style.opacity = "1";
}

function animation3() {
    pointer.style.opacity = "1";
}

function more() {
    myInterval = setInterval(slideUp, 10);
    atBottom = true;
}

function toTop() {
    myInterval = setInterval(slideDown, 10);
    atBottom = false;
}

function slideUp() {
    if (atBottom == true) {
        if (position > 0) {
            position -= 1;
            position2 += 1;
            about.style.top = position + "vh";
            landing.style.top = "-" + position2 + "vh";
        }

        if (position == 0) {
            clearInterval(myInterval);
        }
    }
}

function slideDown() {
    if (atBottom == false) {
        if (position < 100) {
            position += 1;
            position2 -= 1;
            about.style.top = position + "vh";
            landing.style.top = "-" + position2 + "vh";
        }

        if (position == 100) {
            clearInterval(myInterval);
        }
    }
}