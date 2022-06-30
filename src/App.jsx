import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useMemo } from "react";
import './App.css'
import Catalog from "./component/Catalog";
import Main from './component/Main'

function App() {
	const [catalNum, setCatalNum] = useState(0);

  return (
		<div>
			<div id="top-bar">
				<button>show catalog</button>
				<button onClick={()=>setCatalNum(catalNum-1)}>prev</button>
				<button onClick={()=>setCatalNum(catalNum+1)}>next</button>
			</div>
			<div id="canvas-body">
				<Canvas id="canvas-container" className="with-catalog">
    		  <Suspense fallback={null}>
    		    <Main />
    		  </Suspense>
    		</Canvas>
				<Canvas id="catalog">
    		  <Suspense fallback={null}>
    		    <Catalog furnNum={catalNum}/>
    		  </Suspense>
    		</Canvas>
			</div>
		</div>
  );
}

export default App;