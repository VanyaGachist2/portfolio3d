import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import logo from '../../assets/models/dog3.glb';
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
    <spotLight position={[5, 10, 7.5]} />
    <spotLight position={[-3, 10, -7.5]} />
    <pointLight color={"#f00"} position={[0, 0.6, 0]} distance="1.5" />
    { isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} /> }
    <primitive object={gltf.scene} ref={ref} scale={3} />
    </>
  )
}

export default Three;

