"use strict";
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
// okay
draw({ color: "blue", radius: 42 });
