/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei'
const Cube = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </>
  )
}

export default Cube
