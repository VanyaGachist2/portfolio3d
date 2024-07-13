import avatar from '../../assets/images/y7zI5l7gfhM.jpeg';

import { useEffect, useRef } from "react";
import './About.css';

import { motion, useAnimation, useInView } from "framer-motion";

function About ({ aboutDark, isTrue }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log('visible');
    }
  }, [isInView])

  const aboutText = {
    title: "// Hello World!",
    subtitle: `My name is Vanya and i'm a front-end developer
            from Crimea, Russia. I love coding, I love coding, I love coding, I love coding, I love coding
            I love coding, I love coding, I love coding, I love coding, I love coding, I love coding, I love coding,
            I love coding, I love coding, I love coding, I love coding.`,
  }

  return (
    <section className={`about ${aboutDark ? 'about_dark' : ''}`}>
      <motion.article className={`about__container ${aboutDark ? 'about__container_dark' : ''}`}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={"visible"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="about__info">
          <h3 className="about__heading">{aboutText.title}</h3>
          <p className="about__subtitle">{aboutText.subtitle}</p>
          <p className="about__social">find me on
            <a className="about__link"><div className={`about__icon ${aboutDark ? 'about__icon_github_white' : 'about__icon_github'}`}></div></a>
          </p>
        </div>
        <img className="about__avatar" src={avatar} alt="аватарка" />
      </motion.article>
    </section>
  )
}

export default About;
