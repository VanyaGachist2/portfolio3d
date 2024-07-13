import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import logo from '../../assets/models/arthas_world_of_warcraft.glb';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Three () {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 719) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  const ref = useRef();
  const gltf = useLoader(GLTFLoader, logo);

  useFrame(() => {
    ref.current.rotation.y += 0.015;
  })
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 4, 0]} intensity={1.2} />
      <pointLight position={[0, -4, 0]} intensity={0.8} />
      <pointLight position={[4, 0, 0]} intensity={0.8} />
      <pointLight position={[-4, 0, 0]} intensity={0.8} />
      { isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} /> }
      <primitive object={gltf.scene} ref={ref} scale={2.5} />
    </>
  )
}

export default Three;

