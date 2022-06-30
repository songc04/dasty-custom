import React, { useRef, useMemo } from 'react'
import { Merged } from '@react-three/drei'
import { zoomInRoom } from '../CameraControl'

const Isometric = ({camera, orbit, models, ...props}) => {
  const group = useRef();

	return (
    <Merged meshes={models} {...props}>
      {(instances) => <Model instances={instances} camera={camera} orbit={orbit}/>}
    </Merged>
  )
}

function Model({ instances, camera, orbit}) {
		const group = useRef()
		return (
      <group name="Scene" ref={group} dispose={null} >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <group name="6e9b1227653e48a397b3734fb7bf463afbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Scene_1" scale={0.01}>
							
							<group name="Wall" onClick={zoomInRoom(camera, orbit)}>
								<instances.WallsColors />
							</group>

							<group name="Wall" position={[370, 0, 370]} onClick={zoomInRoom(camera, orbit)}>
								<instances.WallsColors3 />
							</group>

            </group>
          </group>
        </group>
      </group>
		)
	}

export default Isometric;