background(0, 0, 219);
var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height);
        noStroke();
        fill(74, 41, 7);
        rect(t*100, height-y, 1, y);
    }
};
drawRange();
var generator1 = new Random(162);
var generator2 = new Random(132);
draw = function() {
    var xOff = 0.0;
    for (var x = 0; x < 400; x++) {
        fill(195, 211, 250);
        var yOff = 0.0;
        for (var y = 0; y < 100; y++) {
            var bright = map(noise(xOff, yOff), 0, 1, 0, 255); 
            stroke(bright, bright, 190);
            point(x, y);
            yOff += 0.01;
        }
        xOff += 0.01;
    }
    
    var num1 = generator1.nextGaussian();
    var mean1 = 200;
    var standardDeviation1 = 200;
    var x = standardDeviation1 * num1 + mean1;
    var num2 = generator2.nextGaussian();
    var standardDeviation2 = 25;
    var mean2 = 300;
    var y = standardDeviation2 * num2 + mean2;
    var tree = getImage("cute/TreeTall");
    image(tree, x, y);
};
