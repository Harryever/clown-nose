nose_x = 0;
nose_y = 0;
function preload() {
  clownnose = loadImage(
    "https://i.postimg.cc/4xYFyc1R/Clown-nose-large-removebg-preview.png"
  );
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x - 22;
    nose_y = results[0].pose.nose.y - 24;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownnose, nose_x, nose_y, 50, 50);
}

function take_snapshot() {
  save("Kohana_Filtered_Img.jpg");
}
