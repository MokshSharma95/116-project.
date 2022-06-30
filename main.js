noseX=0;
noseY=0;

function preload() {
robo_nose = loadImage('2-2-no-shave-movember-day-mustache-png-clipart.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log("nosex = " + noseX);
        console.log("nosey = " + noseY);
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(robo_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}