import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import "./App.css";

const App = () => {
  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </>
  );
};

export default App;
