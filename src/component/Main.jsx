import { Environment, OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei"; 
import * as THREE from 'three';
import React, { useRef, useMemo } from "react";
import Isometric from "./models/Isometric"
import { zoomOutRoom } from "./CameraControl";
import furniture from './models/furniture'

function Main({...prop}){
		const cam = useRef(null);
		const orb = useRef(null);
		const models = useMemo(furniture, []);

    return (
        <>
					<PerspectiveCamera ref={cam} makeDefault position={[-10, 5, 10]} />
					<OrbitControls ref={orb} />

					<Isometric camera={cam} orbit={orb} models={models}/>

					<spotLight position={[-10, 10, 10]} color="#ffffff" distance={30} intensity={1} angle={Math.PI/3}/>
					<ambientLight color="#ffffff" intensity={0.3}/>

					<Environment background>
						<mesh onDoubleClick={zoomOutRoom(cam, orb)}>
							<sphereGeometry args={[50, 100, 100]} />
							<meshBasicMaterial color="#404040" side={THREE.BackSide}/>
						</mesh>
					</Environment>
        </>
    )
};

export default Main;