import Smiley from "./components/Smiley/Smiley";
import { range } from "d3";
import "./App.css";

const width = 166;
const height = 166;
const array = range(15);

function App() {
  return array.map((item) => (
    <Smiley
      key={item}
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={10}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={5 + Math.random() * 5}
      mouthWidth={10 + Math.random() * 5}
      mouthRadius={40}
    />
  ));
}

export default App;
