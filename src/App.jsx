import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import './App.css'
import Three from './component/Three.jsx'

function App() {
	const furn = useRef(null);

  return (
		<div>
		<button onClick={() => {
			if (!!furn.current){
			furn.current.visible = !furn.current.visible;
		}}}>toggle</button>

    <Canvas id="three-canvas-container" shadows>
      <Suspense fullback={null}>
        <Three ref={furn}/>
      </Suspense>
    </Canvas>
		</div>
  );
}

export default App;