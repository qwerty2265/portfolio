"use client";

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function OldPC() {
  const { scene } = useGLTF("/models/OldComputerV2/scene.gltf");
  const computerRef = useRef<Group>(null);
  const { camera } = useThree();
  const router = useRouter();
  
  // Model animation
  useEffect(() => {
    if (computerRef.current) {
      computerRef.current.position.set(10, -1, 0);
      computerRef.current.rotation.y = Math.PI / 4;
      computerRef.current.rotation.x = 0.1;
      
      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.to(computerRef.current!.scale, {
            x: 0, y: 0, z: 0,
            duration: 0,
            onComplete: () => {
              router.push('/os');
            }
          });
        }
      });
      
      timeline.to(computerRef.current.position, {
        x: 0, 
        duration: 2,
        ease: "power2.out"
      });
      
      timeline.to(computerRef.current.rotation, {
        y: -Math.PI * 1.5,
        duration: 2,
        ease: "power1.out"
      }, "-=1.5");
      
      timeline.to(camera.position, {
        x: 0.03,
        y: -0.35,
        z: 0.5,
        duration: 3,
        ease: "power2.inOut"
      }, "-=0.5");
    }
  }, [camera, router]);

  return (
    <group ref={computerRef} scale={2}>
      <primitive object={scene} />
    </group>
  );
}