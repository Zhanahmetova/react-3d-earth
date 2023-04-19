import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "/grass.jpg";

export default function Sphere() {
  const textureMap = useLoader(TextureLoader, texture);

  return (
    <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial map={textureMap}  />
    </mesh>
  );
}