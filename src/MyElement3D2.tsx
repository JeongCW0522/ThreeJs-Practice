import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MyElement3D2 = () => {
  const refMesh = useRef<THREE.Mesh>(null);
  const refWireMesh = useRef<THREE.Mesh>(null);

  const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
    xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    xSegments: { value: 1, min: 1, max: 10, step: 1 },
    ySegments: { value: 1, min: 1, max: 10, step: 1 },
    zSegments: { value: 1, min: 1, max: 10, step: 1 },
  });

  useEffect(() => {
    refWireMesh.current!.geometry = refMesh.current!.geometry;
  }, [xSize, ySize, zSize, xSegments, ySegments, zSegments]);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <OrbitControls />
      <mesh ref={refMesh}>
        <boxGeometry
          args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]}
        />
        <meshStandardMaterial color="#f0c49f" />
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
};

export default MyElement3D2;
