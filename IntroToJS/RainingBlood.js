var xPositions = [200];
var yPositions = [0];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(255, 0, 0);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
    var randomX = random(0, 400);
    xPositions.push(randomX);
    yPositions.push(0);
};
