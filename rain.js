function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rainDrop(){
    this.x=getRandomInt(0, window.innerWidth);
    this.y=getRandomInt(-200,-100);
    this.yspeed=getRandomInt(4,10);
}

rainDrop.prototype.fall = function(){
this.y = this.y + this.yspeed;
if(this.y > window.innerHeight){
    this.y = getRandomInt(-200,100);
}
}

rainDrop.prototype.show = function(){
    stroke(138,43,226);
    line(this.x,this.y,this.x,this.y+10);
}

var Drops = [];



function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for(var i=0;i<200;i++){
        Drops[i] = new rainDrop();
    }
}

function draw(){
    background(2, 0, 36);
    for(var i=0;i<200;i++){
        Drops[i].fall();
        Drops[i].show();
    }
}
