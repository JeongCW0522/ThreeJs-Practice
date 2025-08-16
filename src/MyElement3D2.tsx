import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MyElement3D2 = () => {
  const refMesh = useRef<THREE.Mesh>(null);
  const refWireMesh = useRef<THREE.Mesh>(null);

  useEffect(() => {
    refWireMesh.current!.geometry = refMesh.current!.geometry;
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <OrbitControls />
      <mesh ref={refMesh}>
        <boxGeometry args={[2, 2, 1, 3, 1, 3]} />
        <meshStandardMaterial color="#f0c49f" />
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
};

export default MyElement3D2;
