song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 350);
    canvas.position(385, 200);


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist x=" + leftWristX + " and y=" + leftWristY);
        console.log("Right Wrist x=" + rightWristX + " and y=" + rightWristY);

    }
}

function draw() {
    image(video, 0, 0, 600, 350);
}

function play() {
    song.play();
    song.volume(1);
    song.setValue(1);
}