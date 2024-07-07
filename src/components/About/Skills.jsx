import { OrbitControls } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import SpriteText from "three-spritetext";
extend({ SpriteText });

function Skills () {
  const mySkill = [
    'JavaScript',
    'CSS3',
    'HTML5',
    'ReactJs',
    'NodeJs',
    'Postman',
    'Express',
    'Redux',
    'TypeScript',
  ];
  const ref = useRef();

  const getPosition = (pos) => {
    const first = Math.random();
    const second = Math.random();
    let sum = second > 0.5 ? first * pos : first * -1 * pos;
    return sum;
  }

  useFrame(() => {
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.02;
  })

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <group ref={ref} position={[0, 2, 0]} scale={0.1}>
        {mySkill.map((skills, id) => {
          <SpriteText
            key={id}
            text={skills}
            fontSize={90}
            fontFace={"'Fira Code','Roboto Mono', monospace"}
            position={[getPosition(80), getPosition(80), getPosition(80)]}
            color={skills % 2 === 0 ? "#FAFF81" : "#E06D06"}
          />
        })}
      </group>
    </>
  )
}

export default Skills;
