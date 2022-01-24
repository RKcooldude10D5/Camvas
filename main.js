function preload() {
}  
function setup() {
    canvas=createCanvas(600, 480);
    canvas.position(250, 250)
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 480);
}
function take_snapshot(){
    save('Taken_On_Camvas.png');
}