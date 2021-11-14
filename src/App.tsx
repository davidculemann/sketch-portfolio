import { Sketch1 } from "./components/TestSketch";
import { ConcentricCircles } from "./components/ConcentricCircles";
import { RandomPolygons } from "./components/RandomPolygons";

const Picker: number[] = [1, 1, 0];

function App(): JSX.Element {
  return (
    <div>
      {Picker[0] > 0 && (
        <div>
          <RandomPolygons />
        </div>
      )}

      {Picker[1] > 0 && (
        <div>
          <ConcentricCircles />
        </div>
      )}

      {Picker[2] > 0 && (
        <div>
          <Sketch1 />
        </div>
      )}
    </div>
  );
}

export default App;
