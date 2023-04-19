import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from './components/Sphere';
import { Earth } from './components/Earth';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        {/* <OrbitControls /> */}
        <Earth/>
      </Canvas>
    </div>
  )
}

export default App
