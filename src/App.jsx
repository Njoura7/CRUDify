import { Canvas } from '@react-three/fiber'
import Cube from '../src/Components/Cube'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import './App.css'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

const randomX = gsap.utils.random(-100, 100, 1, true)

function App() {
  const [endX, setEndX] = useState(0)
  const boxRef = useRef()

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: endX,
      duration: 1,
    })
  }, [endX])

  return (
    <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl '>
      <div className='w-full border-2 border-yellow-600 aspect-video'>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      <div className='w-full p-4 border-2 border-teal-300 flex flex-col justify-center items-center'>
        <button
          className='w-full sm:w-auto px-4 py-2 mb-4 bg-teal-500 text-white rounded hover:bg-teal-600'
          onClick={() => setEndX(randomX())}
        >
          Move Box to Random Position
        </button>
        <div
          className='box w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          ref={boxRef}
        >
          {endX}
        </div>
        <div className='mt-4 text-teal-600 font-semibold'>{endX}</div>
      </div>
    </div>
  )
}

export default App
