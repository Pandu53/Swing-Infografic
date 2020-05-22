
var xOff = window.pageXOffset;
var totalWidth = window.innerWidth * 2;
var scrollPercent = 0;

var frames = document.querySelectorAll(".frame");

console.log(xOff);
console.log(totalWidth);

window.onscroll = function () {
    xOff = window.pageXOffset;
    percent = (100 * xOff) / totalWidth;
    console.log(percent);

    if (percent <= 50) {
        frames[0].style.visibility = "visible";
        frames[1].style.visibility = "hidden";
    } else {
        frames[1].style.visibility = "visible";
        frames[0].style.visibility = "hidden";
    }
};