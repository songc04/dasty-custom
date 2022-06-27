import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import './App.css'
import Three from './component/Three.jsx'

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fullback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;