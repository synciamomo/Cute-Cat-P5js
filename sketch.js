var a=0;
var b=0;
var c=50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,204,153);
  noStroke();
  fill(255);
  arc(50, c, random(20,80), 80, 0, PI + QUARTER_PI, PIE);
  arc(150, c-1, random(20,80), 80, PI, QUARTER_PI, PIE);
  arc(250, c-5, random(20,80), 80, 0, PI + QUARTER_PI, PIE);
  arc(350, c+2, random(20,80), 80, PI, QUARTER_PI, PIE);
  
  
// face  
  fill(30);
  ellipse(200,300,350,280);
  triangle(50,230,10,150,90,195);
  triangle(350,230,390,150,310,195);
//   eye
  fill(255,215,0);
  circle(a+120,b+240,60);
  circle(a+260,b+240,60); 
  fill(0);
  circle(a+120,b+240,50);
  circle(a+260,b+240,50);
//  food 
  fill(139,69,19);
  ellipse(mouseX,mouseY,60,50);
//   line
  stroke(255);
  strokeWeight(5);
  line(0,random(330,340),100,280);
  line(0,random(270,280),100,280);
  line(0,random(230,240),100,280);
  line(400,random(270,280),300,280);
  line(400,random(230,240),300,280);
  line(400,random(330,340),300,280);

 
  a=map(mouseX,0,400,0,20);
  b=map(mouseY,0,400,0,20);
  c=c+0.1;
  
}