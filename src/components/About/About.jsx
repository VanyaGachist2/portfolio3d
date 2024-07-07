import { Canvas } from "@react-three/fiber";
import TitleMain from "../TitleMain/TitleMain";
import './About.css';

function About () {
  return (
    <section className="about">
      <article className="about__container">
        <TitleMain name='About' />

      </article>
    </section>
  )
}

export default About;
