
var xOff = window.pageXOffset;
var totalWidth = window.innerWidth * 2;
var scrollPercent = 0;
var content = document.querySelector(".content");

console.log(xOff);
console.log(totalWidth);

createFrames(10);
var frames = document.querySelectorAll(".frame");

window.onscroll = function () {
    xOff = window.pageXOffset;
    percent = (100 * xOff) / totalWidth;
    console.log(percent);

    var frameId = Math.floor(percent/10);
    showFrame(frameId);
};


function createFrames(frameCount){
    var frame;
    for(var i = 0; i < frameCount; i++){
        frame = document.createElement("div");
        frame.setAttribute("frame-id",i);
        frame.classList.add("frame");
        frame.innerHTML = i;
        content.appendChild(frame);
    }
}

function showFrame(frameId){

    frames.forEach(element => {
        if(frameId == element.getAttribute("frame-id")){
            element.classList.add("visibleFrame100");
        } else {
            element.classList.remove("visibleFrame100");
        }
    });
}