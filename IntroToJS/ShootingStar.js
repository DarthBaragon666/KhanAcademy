var xPos = 201;
var yPos = 201;
var xPos2 = 201;
var yPos2 = 201;
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    stroke(255, 242, 0);
    line(201, 201, xPos, yPos);
    line(201, 201, xPos2, yPos2);
    xPos++;
    yPos++;
    xPos2--;
    yPos2++;
};
