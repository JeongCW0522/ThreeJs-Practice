import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyElement3D3 from "./MyElement3D3";

const App = () => {
  return (
    <>
      <Canvas>
        <MyElement3D3 />
      </Canvas>
    </>
  );
};

export default App;
