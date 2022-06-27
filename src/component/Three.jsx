import { Environment, OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei"; 
import * as THREE from 'three';
import React, { useEffect, useState, useRef } from "react";
import Isometric from "./models/Isometric"

const Three = React.forwardRef((prop, ref) => {
    return (
        <>
					<PerspectiveCamera makeDefault position={[-10, 5, 10]}/>
					<OrbitControls />

					<Isometric ref={ref}/>

					<SpotLight position={[-10, 10, 10]} color="#ffffff" distance={30} intensity={1} angle={Math.PI/3}/>

					<Environment background>
						<mesh>
							<sphereGeometry args={[50, 100, 100]} />
							<meshBasicMaterial color="#404040" side={THREE.BackSide}/>
						</mesh>
					</Environment>
        </>
    )
});

export default Three;