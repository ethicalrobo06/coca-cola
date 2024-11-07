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
      // Adjusted initial position
      modelRef.current.position.set(50, 0, 0)
      modelRef.current.rotation.set(0, 0, 0)

      // Listen for custom event
      window.addEventListener('moveModel', () => {
        gsap.to(modelRef.current.position, {
          x: 0,
          y: -1,
          z: 0,
          duration: 2.5,
          ease: 'power3.inOut',
        })
      })
    }

    // Scroll animation
    if (modelRef.current) {
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

    return () => {
      window.removeEventListener('moveModel', () => {})
    }
  }, [])

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={80}
      position={[50, 0, 0]}
    />
  )
}

export default ProductModel
