/* eslint-disable */

import { useState } from "react";
import { ConcentricCircles } from "./ConcentricCirclesJS";
import { RandomPolygons } from "./RandomPolygons";

export function SketchApp() {
  const [sketch, setSketch] = useState("circles");
  const handleSetSketch = (sketchName) => setSketch(sketchName);

  return (
    <div>
      <div>
        <button onClick={() => handleSetSketch("circles")}>circles</button>
        <button onClick={() => handleSetSketch("polygons")}>polygons</button>
      </div>
      <div>
        {sketch === "circles" && ConcentricCircles()}
        {sketch === "polygons" && RandomPolygons()}
      </div>
    </div>
  );
}
