import './App.css'
// import { Canvas } from '@react-three/fiber'
// import { Cube } from '@/Components/Cube'

import { Client } from '@/Components/Client'
import { Server } from '@/Components/Server'
import { Db } from '@/Components/Db'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <div className='w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl '>
      {/* <div className='w-full border-2 border-yellow-600 aspect-video'>
        <Canvas>
          <Cube />
        </Canvas>
      </div> */}
      <Client />

      <Flex
        flexDirection='column'
        md={{ flexDirection: 'row' }}
        className='border-2 border-red-500'
      >
        <Server />
        <Db />
      </Flex>
    </div>
  )
}

export default App
