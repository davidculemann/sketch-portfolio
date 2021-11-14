import { SketchApp } from "./components/SketchApp";

function App(): JSX.Element {
  return <SketchApp />;
}
// const Picker: number[] = [0, 1, 0];

// function App(): JSX.Element {
//   return (
//     <div>
//       {Picker[0] > 0 && (
//         <div>
//           <RandomPolygons />
//         </div>
//       )}

//       {Picker[1] > 0 && (
//         <div>
//           <ConcentricCircles />
//         </div>
//       )}

//       {Picker[2] > 0 && (
//         <div>
//           <Sketch1 />
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
