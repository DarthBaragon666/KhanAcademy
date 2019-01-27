background(219, 255, 255);

fill(232, 9, 9);
triangle(200, 28, 350, 150, 50, 150);

fill(0, 0, 0);

rect(60, 150, 280, 207);

fill(66, 41, 3);
for (var j = 0; j < 2; j++) {
    var doorX= j * 40 + 161;
    rect(doorX, 280, 40, 77);
}
fill(255, 255, 255);
for (var i=0; i<2; i++) {
    var rectX = i * 121 + 113;
    rect(rectX, 176, 50, 50);
    line(rectX + 25, 176, rectX + 25, 226);
    line(rectX, 176 + 25, rectX + 50, 176 + 25);
}
