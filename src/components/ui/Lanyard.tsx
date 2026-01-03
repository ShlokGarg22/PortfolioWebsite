import { useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

extend(THREE as any);

const Card = () => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, hover] = useState(false);
  
  useFrame((state, delta) => {
    if (ref.current) {
      // Simple floating animation
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Tilt based on mouse position (simplified physics)
      const x = state.pointer.x;
      const y = state.pointer.y;
      
      easing.dampE(ref.current.rotation, [y * 0.5, x * 0.5, 0], 0.2, delta);
    }
  });

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[2.5, 3.5, 0.1]} />
        <meshPhysicalMaterial
          color={hovered ? "#ffffff" : "#f0f0f0"}
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Badge Content */}
      <mesh position={[0, 0.5, 0.06]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial color="#000000" /> 
        {/* Placeholder for Avatar - in real app use useTexture */}
      </mesh>
      <mesh position={[0, -0.8, 0.06]}>
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
    </group>
  );
};

const Lanyard = () => {
  return (
    <div className="h-[400px] w-full md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Card />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Lanyard;
