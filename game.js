
var s;
var scl=20;
var food;
function setup(){
    createCanvas(600,600);
    s=new Snake();
    frameRate(10);
    pickLocation();
}
function pickLocation(){
    var cols=floor(width/scl);
    var rows=floor(height/scl);
    food=createVector(floor(random(cols)),floor(random(rows)));


}



function draw(){
    background(100);
    s.death();
    s.update();
    s.show();  
    if(s.eat(food)){
        pickLocation();
    }
    fill(255,0,100);

    rect(food.x*scl,food.y*scl,scl,scl)
}