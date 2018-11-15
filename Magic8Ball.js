fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 320, 280, 80, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 1) {
    text("NAAAAAH", 176, 200);
    text("", 159, 229); 
}
else if (answer===2) {
    text("THERE IS", 176, 200);
    text("0 CHANCE OF THAT", 140, 229); 
}
else if (answer===3) {
    text("YOU CAN DO", 162, 200);
    text("ANYTHING", 166, 240); 
}
else if (answer===4) {
    text("YEAH", 190, 200);
    text("", 159, 229); 
}
