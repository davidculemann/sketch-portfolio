import Sketch from "react-p5";
import p5Types from "p5";

export function RandomPolygons(): JSX.Element {
  const vertexLength = 150;

  const pallete: string[] | number[] = [
    "#594F4F",
    "#547980",
    "#45ADA8",
    "#9DE0AD",
    "#E5FCC2",
    "#594F4F",
    "#547980",
    "#45ADA8",
  ];

  // const lengths = [50, 150, 250];
  // const grayscalePallete = [220]
  // const colouredPallete = ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2", "#594F4F", "#547980", "#45ADA8"]

  interface IPoints {
    x: number;
    y: number;
  }

  function setup(p5: p5Types) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameRate(20);
    p5.background(100);
    p5.noStroke();
    // shadowsOn();
    //noLoop();
  }

  function draw(p5: p5Types) {
    const numShapes = p5.random(2, 5);
    for (let i = 0; i < numShapes; i++) {
      const numVertices = p5.random(3, 6);
      const randomPoints: IPoints[] = [];
      for (i = 0; i < numVertices; i++) {
        randomPoints.push({
          x: p5.random(-vertexLength, vertexLength),
          y: p5.random(-vertexLength, vertexLength),
        });
      }
      if (p5.mouseIsPressed) {
        p5.beginShape();
        defineVertices(randomPoints, p5);
        p5.fill(p5.random(pallete));
        p5.endShape(p5.CLOSE);

        p5.beginShape();
        defineSymmetryVertices(randomPoints, p5);
        p5.fill(p5.random(pallete));
        p5.endShape(p5.CLOSE);
      }
    }
  }

  //const colorPicker = () => palette? palette : random(colourPallete)

  function defineVertices(randomPoints: IPoints[], p5: p5Types) {
    for (const point of randomPoints) {
      p5.vertex(p5.mouseX + point.x, p5.mouseY + point.y);
    }
  }

  function defineSymmetryVertices(randomPoints: IPoints[], p5: p5Types) {
    for (const point of randomPoints) {
      p5.vertex(p5.width - (p5.mouseX + point.x), p5.mouseY + point.y);
    }
  }

  // function shadowsOn(amount = 30) {
  //   drawingContext.shadowBlur = amount;
  //   drawingContext.shadowColor = p5.color(50, 150);
  // }

  // function shadowsOff() {
  //   drawingContext.shadowBlur = 0;
  // }

  // function keyTyped(p5: p5Types) { // eslint-disable-line no-unused-vars
  //   if (p5.key === "1") {
  //     p5.background(100)
  //   }
  //   if (p5.key === "2") {
  //     vertexLength = lengths[0]
  //   }
  //   if (p5.key === "3") {
  //     vertexLength = lengths[1]
  //   }
  //   if (p5.key === "4") {
  //     vertexLength = lengths[2]
  //   }
  //   if (p5.key === "g") {
  //     pallete = grayscalePallete
  //   }
  //   if (p5.key === "c") {
  //     pallete = colouredPallete
  //   }
  // }

  return <Sketch setup={setup} draw={draw} />;
}
