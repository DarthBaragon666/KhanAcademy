var generator1 = new Random(1);
var generator2 = new Random(2);
var Snake = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Snake.prototype.update = function() {
    var num1 = generator1.nextGaussian();
    var standardDeviation1 = 200;
    var mean1 = 200;
    var x = standardDeviation1 * num1 + mean1;
    var num2 = generator2.nextGaussian();
    var standardDeviation2 = 200;
    var mean2 = 200;
    var y = standardDeviation2 * num2 + mean2;
    var mouse = new PVector(x, y);//basically it's like mouse following but instead of the mouse it's a random point
    var dir = PVector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Snake.prototype.display = function() {
    noStroke();
    fill(2, 186, 24);
    ellipse(this.position.x, this.position.y, 17, 202);//snake
    fill(0, 0, 0);
    ellipse(this.position.x-2, this.position.y-90, 2, 2);
    ellipse(this.position.x+2, this.position.y-90, 2,2);//eyes
    stroke(242, 131, 131);
    line(this.position.x, this.position.y-101, this.position.x, this.position.y-110);
    line(this.position.x, this.position.y-110, this.position.x-3, this.position.y-113);
    line(this.position.x, this.position.y-110, this.position.x+3, this.position.y-113);//tongue
};

Snake.prototype.checkEdges = function() {

    if (this.position.x > width) {
        this.velocity.x *= -1;
    } else if (this.position.x < 0) {
        this.velocity.x *= -1;
    }
    
    if (this.position.y > height) {
        this.velocity.y *= -1;
    } else if (this.position.y < 0) {
        this.velocity.y *= -1;
    }
};
var Rat = function() {
  this.position = new PVector(random(width), random(height));
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(0, 0);
};

Rat.prototype.update = function() {
    var num1 = generator1.nextGaussian();
    var standardDeviation1 = 200;
    var mean1 = 200;
    var x = standardDeviation1 * num1 + mean1;
    var num2 = generator2.nextGaussian();
    var standardDeviation2 = 200;
    var mean2 = 200;
    var y = standardDeviation2 * num2 + mean2;
    var mouse = new PVector(x, y);//basically it's like mouse following but instead of the mouse it's a random point
    var dir = PVector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Rat.prototype.display = function() {
  
  fill(127);
  noStroke();
  ellipse(this.position.x, this.position.y, 19, 14);//body
  ellipse(this.position.x+3, this.position.y-6, 10, 10);//outer part of ear
  fill(245, 135, 135);
  ellipse(this.position.x+3, this.position.y-6, 7, 7);//inner part of ear
  fill(0);
  ellipse(this.position.x+3, this.position.y+0, 2, 2);//eye
  stroke(0);
  line(this.position.x-5, this.position.y+3, this.position.x-5, this.position.y+8);//hind legs
  line(this.position.x+3, this.position.y+3, this.position.x+3, this.position.y+8);//front legs
  stroke(245, 135, 135);
  line(this.position.x-9.1, this.position.y, this.position.x-15, this.position.y);//tail
};

Rat.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.velocity.x *= -1;
  } 
  else if (this.position.x < 0) {
    this.velocity.x *= -1;
  }

  if (this.position.y > height) {
    this.velocity.y *= -1;
  } 
  else if (this.position.y < 0) {
    this.velocity.y *= -1;
  }
};

var Rats = [];

for (var i = 0; i < 20; i++) {
    Rats[i] = new Rat(); 
}
var Snake1 = new Snake();
var Snake2 = new Snake();
var draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < Rats.length; i++) {
        Rats[i].update();
        Rats[i].checkEdges();
        Rats[i].display(); 
    }
    Snake1.update();
    Snake1.checkEdges();
    Snake1.display();
    Snake2.update();
    Snake2.checkEdges();
    Snake2.display();
};
