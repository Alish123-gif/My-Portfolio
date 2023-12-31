import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Decal, Float, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2}/>
      Ball
      <directionalLight position={[0,0,0.05] }/>
      <mesh castShadow receiveShadow scale={2.35}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color="#D1D5DB"
        polygonOffset
        polygonOffsetFactor={-5}
        />
        <Decal map={decal}
        position={[0,0,1]}
        rotation={[2*Math.PI, 0, 6.25]}/>
      </mesh>
    </Float>
  )
}

const BallCanvas= ({icon}) => {
  return(
  <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>

  )
}

export default BallCanvas