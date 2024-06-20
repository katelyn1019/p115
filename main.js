function preload() {

}

function setup() {
    var canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model = ml5.poseNet(video , modelloaded);
    model.on("pose",gotresult);
}

function modelloaded() {
    console.log("model is loaded");
}

function gotresult(result) {
    if (result.length > 0){
     console.log(result);
     nosex = result[0].pose.nose.x;
     nosey = result[0].pose.nose.y;
     console.log("x of the nose = " + nosex);
     console.log("y of the nose = " + nosey);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
}