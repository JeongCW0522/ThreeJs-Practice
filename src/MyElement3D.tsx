import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const MyElement3D = () => {
  const refMesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!refMesh.current) return;
    refMesh.current.rotation.y += delta; // 프레임레이트와 무관한 회전 속도
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh
        ref={refMesh}
        position={[0, 2, 0]}
        rotation={[0, THREE.MathUtils.degToRad(45), 0]}
        scale={[2, 1, 1]}
      >
        {"x축으로는 0도, y축으로는 45도, z축으로는 0도 회전 "}
        <boxGeometry />
        <meshStandardMaterial color="#f0c49f" opacity={0.5} transparent />

        <mesh scale={[0.1, 0.1, 0.1]} position={[0, 2, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </mesh>
    </>
  );
};

export default MyElement3D;
