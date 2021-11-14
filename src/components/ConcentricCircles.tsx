import Sketch from "react-p5";
import p5Types from "p5";

export function ConcentricCircles(): JSX.Element {
  function setup(p5: p5Types) {
    p5.frameRate(10);
    p5.createCanvas(600, 600); // width and height, in pixels
    //noLoop(); // This says: only call draw() once, please!
  }

  function draw(p5: p5Types) {
    //background("white");
    p5.noFill(); // Says: Don't colour in the the next shapes, please.
    p5.noStroke();
    p5.colorMode(p5.HSB);
    //stroke("black");	// Says: Outline the next shapes in black, please!

    const coordinateArr = [
      { x: 100, y: 100 },
      { x: 100, y: 300 },
      { x: 100, y: 500 },
      { x: 300, y: 100 },
      { x: 300, y: 300 },
      { x: 300, y: 500 },
      { x: 500, y: 100 },
      { x: 500, y: 300 },
      { x: 500, y: 500 },
    ];

    for (const coordinate of coordinateArr) {
      for (let diam = 175; diam >= 0; diam -= p5.random(5, 10)) {
        p5.circle(coordinate.x, coordinate.y, diam);
        p5.fill(p5.random(0, 360), 60, 70);
      }
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}
