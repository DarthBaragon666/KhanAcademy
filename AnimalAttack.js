var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(214, 84, 23);
    ellipse(bodyX, bodyY-70, bodyH+57, 97);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body
    ellipse(bodyX, bodyY-70, bodyH, 47); // face
    fill(0, 0, 0);
    ellipse(bodyX+-15, bodyY+-74, bodyW/11.8, bodyW/11.8);//left eye
    ellipse(bodyX+12, bodyY+-74, bodyW/11.8, bodyW/11.8);//left eye
    fill(245, 177, 76);
    rect(bodyX+-6, bodyY+-71, bodyH/16.9, bodyH/10.7);
    line(bodyX+-11, bodyY+-54, bodyX+7, bodyY+-54);
    bodyX++;
    bodyY--;
};
