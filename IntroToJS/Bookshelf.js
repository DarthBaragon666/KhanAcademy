var theGiverSeries = [
    {
        title: "The Giver",
        stars: 4,
        author: "James Hetfield"
    },
    {
        title: "The Giver 2",
        stars: 3,
        author: "James Hetfield"
    },
    {
        title: "The Giver 3",
        stars: 1,
        author: "Lil Pump"
    },
    {
        title: "The Giver 4",
        stars: 5,
        author: "James Hetfield"
    }
];
// draw shelf
for (var i = 0; i < 5; i++) {
    fill(173, 117, 33);
    rect(0, i*90+120, width, 10);
}
// draw one book

for (var j=0; j<theGiverSeries.length; j++) {
    fill(214, 255, 219);
    rect(j*97, 20, 90, 100);
    fill(0, 0, 0);
    text(theGiverSeries[j].title, j*97, 29, 70, 100);
    
}
for (var i=0; i<theGiverSeries.length; i++) {
    text(theGiverSeries[i].author, i*98, 87);
}
for (var i = 0; i < theGiverSeries[0].stars; i++) {
        image(getImage("cute/Star"), 1 + i * 17, 90, 20, 30);
}
for (var i = 0; i < theGiverSeries[1].stars; i++) {
        image(getImage("cute/Star"), 101 + i * 17, 90, 20, 30);
}
for (var i = 0; i < theGiverSeries[2].stars; i++) {
        image(getImage("cute/Star"), 201 + i * 17, 90, 20, 30);
}
for (var i = 0; i < theGiverSeries[3].stars; i++) {
        image(getImage("cute/Star"), 292 + i * 17, 90, 20, 30);
}
