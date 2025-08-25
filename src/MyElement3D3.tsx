import { OrbitControls } from "@react-three/drei";

const MyElement3D2 = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 1, 3]} />
      <directionalLight position={[2, 1, 3]} intensity={0.7} />

      <mesh position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>

      <mesh position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>

      <axesHelper scale={10} />
    </>
  );
};

export default MyElement3D2;
