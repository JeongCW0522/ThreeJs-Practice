import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const MyElement3D = () => {
  const refMesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    refMesh.current!.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} rotation={[0, (45 * Math.PI) / 180, 0]}>
        {"x축으로는 0도, y축으로는 45도, z축으로는 0도 회전 "}
        <boxGeometry />
        <meshStandardMaterial color="#f0c49f" />
      </mesh>
    </>
  );
};

export default MyElement3D;
