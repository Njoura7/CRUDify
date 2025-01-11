import { Canvas } from '@react-three/fiber'
import { Cube } from '../src/Components/Cube'
import { Input } from '../src/Components/Input'

import './App.css'

function App() {
  return (
    <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl '>
      <div className='w-full border-2 border-yellow-600 aspect-video'>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      <Input />
    </div>
  )
}

export default App
