let capture;
function setup() {
createCanvas(displayWidth, displayHeight);
capture = createCapture(VIDEO);
    capture.size(displayWidth, displayHeight);
}
function draw() {
image(capture, 0, 0, displayWidth, displayHeight);
}

function Capturefunction() {
    saveCanvas(canvas, 'MyCanvas', 'png');
}
