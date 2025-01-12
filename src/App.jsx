import { Canvas } from '@react-three/fiber'
import { Cube } from '@/Components/Cube'
import { Input } from '@/Components/Input'

import './App.css'
import { Client } from '@/Components/Client'
import { Server } from '@/Components/Server'

function App() {
  return (
    <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl '>
      <div className='w-full border-2 border-yellow-600 aspect-video'>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      <Client />
      <Input />
      <Server />
    </div>
  )
}

export default App
