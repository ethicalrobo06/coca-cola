import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductModel from './ProductModel'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function AnimationWrapper() {
  const textRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    )
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E51E2A] to-[#B31B23]" />

      {/* Text content */}
      <div ref={textRef} className="relative z-30 pt-20 w-full text-center">
        <h1 className="text-4xl text-white font-bold">
          Welcome to the Coca-Cola Experience
        </h1>
        <p className="mt-6 text-xl text-white">
          Scroll to see our product in 3D!
        </p>
        <p className="mt-6 text-lg text-white/80">
          This is a dynamic interactive 3D animation powered by GSAP and React
          Three Fiber.
        </p>
      </div>

      {/* 3D Model */}
      <div id="model-section" className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense
            fallback={
              <Html center>
                <div className="text-white">Loading model...</div>
              </Html>
            }
          >
            <ProductModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  )
}
