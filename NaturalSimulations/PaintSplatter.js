var generator1 = new Random(33);
var generator2 = new Random(60);
draw = function() {
    var numX = generator1.nextGaussian();
    var numY = generator2.nextGaussian();
    var standardDeviation = 150;
    var mean = 200;
    var standardDeviation2 = 150;
    var mean2 = 200;
    var x = standardDeviation * numX + mean;
    var y = standardDeviation2 * numY + mean2;
    var colour1 = random(255);
    var colour2 = random(255);
    var colour3 = random (255);
    noStroke();
    fill(colour1, colour2, colour3);
    ellipse(x, y, y%10, x%10);
};
