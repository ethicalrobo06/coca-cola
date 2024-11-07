import React, { useRef, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProductModel() {
  const modelRef = useRef()
  const gltf = useLoader(GLTFLoader, '/models/coca-cola.glb')

  useEffect(() => {
    if (modelRef.current) {
      // Reset initial position
      modelRef.current.position.set(0, 5, 0)
      modelRef.current.rotation.set(0, 0, 0)

      // Animate position and rotation on scroll
      gsap.to(modelRef.current.position, {
        y: 0,
        scrollTrigger: {
          trigger: '#model-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      gsap.to(modelRef.current.rotation, {
        x: Math.PI * 2,
        scrollTrigger: {
          trigger: '#model-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={28}
      position={[0, 5, 0]}
    />
  )
}

export default ProductModel
