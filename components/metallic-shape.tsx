"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Environment } from "@react-three/drei"
import type * as THREE from "three"

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0005
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial color="#7A89FF" metalness={0.8} roughness={0.4} envMapIntensity={0.8} />
      </Sphere>
    </group>
  )
}

export function MetallicShape() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.8} />
        <Environment preset="night" />
        <RotatingShape />
      </Canvas>
    </div>
  )
}
