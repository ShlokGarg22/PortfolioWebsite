import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GradientShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#ff0000') }, // Placeholder, will be overridden
    uColor2: { value: new THREE.Color('#0000ff') },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Create a subtle moving gradient
      float t = uTime * 0.5;
      
      float r = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
      float g = cos(uv.y * 3.0 + t * 0.8) * 0.5 + 0.5;
      float b = sin((uv.x + uv.y) * 3.0 - t * 0.5) * 0.5 + 0.5;
      
      // Soft pastel colors for Apple-like feel
      vec3 color1 = vec3(0.95, 0.95, 0.97); // Light gray/white
      vec3 color2 = vec3(0.90, 0.92, 0.98); // Very light blue
      vec3 color3 = vec3(0.98, 0.90, 0.92); // Very light pink
      
      vec3 finalColor = mix(color1, color2, r);
      finalColor = mix(finalColor, color3, g);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const GradientMesh = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={GradientShader.vertexShader}
        fragmentShader={GradientShader.fragmentShader}
      />
    </mesh>
  );
};

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <GradientMesh />
      </Canvas>
    </div>
  );
};

export default GradientBackground;
