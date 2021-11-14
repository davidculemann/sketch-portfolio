/* eslint-disable */
import Sketch from "react-p5";

export function ConcentricCircles() {
  const num = 6;
  let coordinateArray = [];
  let diam = 0;

  function setup(p5) {
    const Canvas = [p5.windowWidth, p5.windowHeight];
    diam = p5.windowHeight / num;
    createCircleArray(num, diam, p5);
    p5.frameRate(10);
    p5.createCanvas(...Canvas); // width and height, in pixels
  }

  function draw(p5) {
    p5.noFill(); // Says: Don't colour in the the next shapes, please.
    p5.noStroke();
    p5.colorMode(p5.HSB);

    for (let coordinate of coordinateArray) {
      for (let d = diam; d >= 0; d -= p5.random(5, 10)) {
        p5.circle(coordinate.x, coordinate.y, d);
        p5.fill(p5.random(0, 360), 60, 70);
      }
    }
  }
  function keyPressed(p5) {
    if (p5.key === "1") {
      Canvas = [200, 200];
    }
  }

  function createCircleArray(num, diam, p5) {
    for (let i = 1; i < num + 1; i++) {
      for (let j = 1; j < num + 1; j++) {
        coordinateArray.push({
          x: i * (diam + (p5.windowHeight - num * diam) / (num + 1)) - diam / 2,
          y: j * (diam + (p5.windowHeight - num * diam) / (num + 1)) - diam / 2,
        });
      }
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}
