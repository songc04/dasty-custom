import { Environment, Merged, OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei"; 
import * as THREE from 'three';
import React, { useRef, useMemo } from "react";
import furniture from './models/furniture'

function Catalog({furnNum, ...prop}){
		const cam = useRef(null);
		const orb = useRef(null);
		const models = useMemo(() => Object.values(furniture()), []);

		return (
        <>
					<PerspectiveCamera ref={cam} makeDefault position={[-5, 5, 5]} />
					<OrbitControls ref={orb} />

					<ambientLight color="#ffffff" intensity={1}/>	
					
					<group rotation={[-Math.PI / 2, 0, -Math.PI]}>
						<Merged meshes={[models[furnNum]]} scale={0.01} rotation={[Math.PI / 2, 0, 0]}>
     					{(Furn) => <Furn />}
   					</Merged>
					</group>

					<Environment background>
						<mesh>
							<sphereGeometry args={[50, 100, 100]} />
							<meshBasicMaterial color="#ffe7a6" side={THREE.BackSide}/>
						</mesh>
					</Environment>
        </>
    )
};

export default Catalog;