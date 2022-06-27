import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"; 
import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./models/isometrics"

export default function Three(){
    return (
        <>
					<PerspectiveCamera makeDefault position={[500, 500, 500]}/>

					<Model />

					<Environment background>
						<mesh>
							<sphereGeometry args={[50, 100, 100]} />
							<meshBasicMaterial color="#404040" side={THREE.BackSide}/>
						</mesh>
					</Environment>
        </>
    )
}