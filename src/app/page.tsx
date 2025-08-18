"use client"
import OldPC from "@/components/threejs/OldPC";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <ambientLight intensity={1} />
        <OldPC />
      </Canvas>
    </main>
  )
}