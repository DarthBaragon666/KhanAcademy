var generator1 = new Random(1);
var generator2 = new Random(2);
var Attractor = function() {
    this.position = new PVector(width/2, height/2);
    this.acceleration = new PVector(0, 0);
    this.velocity = new PVector(0, 0);
    this.mass = 20;
    this.G = 1;
};
Attractor.prototype.calculateAttraction = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);  
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};
Attractor.prototype.display = function() {
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
    var cheese = getImage("cute/EnemyBug");
    image(cheese,this.position.x, this.position.y, this.mass*2, this.mass*2);
};
var Snake = function(x, y, mass) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
};

Snake.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};
Snake.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);//attracts to the bug, but the rats also attract the bug so it's like the snake chases the rats
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
var Rat = function(x, y, mass) {
  this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
};
Rat.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);//attracts the bug so it chases the bug
};
Rat.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
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
var attractor = new Attractor();
var Rats = [];

for (var i = 0; i < 20; i++) {
    Rats[i] = new Rat(random(width), random(height), random(0.1, 2)); 
}
var Snake1 = new Snake(random(width), random(height), random(0.1, 2));
var draw = function() {
    background(255, 255, 255);
    attractor.display();
    for (var i = 0; i < Rats.length; i++) {
        var force = attractor.calculateAttraction(Rats[i]);
        Rats[i].applyForce(force);
        Rats[i].update();
        Rats[i].checkEdges();
        Rats[i].display(); 
    }
    var force = attractor.calculateAttraction(Snake1);
    Snake1.applyForce(force);
    Snake1.update();
    Snake1.checkEdges();
    Snake1.display();
};
