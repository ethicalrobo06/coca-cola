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
      // Set initial position and rotation
      modelRef.current.position.set(50, 0, 0)
      modelRef.current.rotation.set(0, 0, 0)

      // Listen for custom event
      window.addEventListener('moveModel', () => {
        // Timeline for combined animations
        const tl = gsap.timeline()

        // Move from right to center while rotating
        tl.to(modelRef.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2.5,
          ease: 'power3.inOut',
        }).to(
          modelRef.current.rotation,
          {
            y: Math.PI * 4, // Two full rotations
            duration: 2.5,
            ease: 'power3.inOut',
          },
          0
        ) // Start at the same time as position animation

        // Continue rotating like Earth
        gsap.to(modelRef.current.rotation, {
          y: Math.PI * 20, // Multiple rotations
          duration: 20,
          repeat: -1, // Infinite repeat
          ease: 'none',
          delay: 2.5, // Start after entrance animation
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
      scale={76}
      position={[50, 0, 0]}
    />
  )
}

export default ProductModel
