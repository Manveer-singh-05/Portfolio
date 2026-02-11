import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const ICON_URLS = [
  "/assest/skills/react-svgrepo-com.svg",
  "/assest/skills/js-svgrepo-com.svg",
  "/assest/skills/html-5-svgrepo-com.svg",
  "/assest/skills/css-3-svgrepo-com.svg",
  "/assest/skills/node-js-svgrepo-com.svg",
  "/assest/skills/python-svgrepo-com.svg",
  "/assest/skills/docker-svgrepo-com.svg",
  "/assest/skills/git-svgrepo-com.svg",
  "/assest/skills/linux-svgrepo-com.svg",
  "/assest/skills/cpp-svgrepo-com.svg",
  "/assest/skills/php-svgrepo-com.svg",
  "/assest/skills/java-svgrepo-com.svg",
  "/assest/skills/reddit-svgrepo-com.svg",
  "/assest/skills/github-svgrepo-com.svg",
  "assest/skills/tailwind-svgrepo-com.svg",
  "assest/skills/database-svgrepo-com.svg",

];

const SkillIcon = ({ texture, position }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {/* Icon size kept at 0.7 for good visibility in medium scale */}
      <planeGeometry args={[0.7, 0.7]} /> 
      <meshBasicMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide} 
        depthWrite={false}
      />
    </mesh>
  );
};

const Globe = () => {
  const groupRef = useRef();
  const textures = useTexture(ICON_URLS);

  // --- MEDIUM SCALE SETTINGS ---
  const count = 20; 
  const radius = 1.75; // Radius 2.5 is the sweet spot for "Medium"
  // ------------------------------

  const iconPositions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      pos.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ]);
    }
    return pos;
  }, [count, radius]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {textures.length > 0 && iconPositions.map((pos, i) => (
        <SkillIcon 
          key={i} 
          texture={textures[i % textures.length]} 
          position={pos} 
        />
      ))}
    </group>
  );
};

const Skills3D = () => {
  return (
    
      
      <Canvas  style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 7], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <Globe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    
  );
};

export default Skills3D;