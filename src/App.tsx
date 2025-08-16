import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyElement3D2 from "./MyElement3D2";

const App = () => {
  return (
    <>
      <Canvas>
        <MyElement3D2 />
      </Canvas>
    </>
  );
};

export default App;
