song1="";
song2="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";
function preload(){
    song1=loadSound("Hey mama.mp3");
    song2=loadSound("music.mp3")
    }
    function stmusic(){
       song1.play(); 
       song2.play();
       song1.setVolume(1);
       song1.rate(1);
       song2.setVolume(1);
       song2.rate(1);
     }

    function setup(){
        canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    }
    function draw() {
        image(video, 0, 0, 600, 500);
         
        song1_status = song1.isPlaying();
        song2_status = song2.isPlaying();
         
        fill("#FF0000");
        stroke("#FF0000");
         
        if(scoreRightWrist > 0.2)
        { 
        circle(rightWristX,rightWristY,20);
         
        song2.stop();
         
        if(song1_status == false)
        {
        song1.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
        }
        }
         
        if(scoreLeftWrist > 0.2)
        {
        circle(leftWristX,leftWristY,20);
         
        song1.stop();
         
        if(song2_status == false)
        {
        song2.play();
        document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
        }
        }
         
        }
    function modelLoaded(){
        console.log("Pose Net is Instlized");
    }

    function gotPoses(results){
        if(results.length >0){
            console.log(results);
            leftwristX=results[0].pose.leftWrist.x;
            leftwristY=results[0].pose.leftWrist.y;
            rightwristX=results[0].pose.rightWrist.x;
            rightwristY=results[0].pose.rightWrist.y;
            console.log("leftwristX= "+leftwristX+"leftwristY= "+leftwristY);
            console.log("rightwristX= "+rightwristX+"rightwristY= "+rightwristY);
        }
    }
