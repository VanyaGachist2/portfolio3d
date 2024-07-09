import TitleMain from "../TitleMain/TitleMain";
import './About.css';
import avatar from '../../assets/images/y7zI5l7gfhM.jpeg';

function About ({ aboutDark, isTrue }) {
  const aboutText = {
    title: "Hello World!",
    subtitle: `My name is Vanya and i'm a front-end developer
            from Crimea, Russia. I love coding, I love coding, I love coding, I love coding, I love coding
            I love coding, I love coding, I love coding, I love coding, I love coding, I love coding, I love coding,
            I love coding, I love coding, I love coding, I love coding.`,
  }
  return (
    <section className={`about ${aboutDark ? 'about_dark' : ''}`}>
      <article className={`about__container ${aboutDark ? 'about__container_dark' : ''}`}>
        <TitleMain name='About' isTrue={isTrue} />
        <div className="about__info">
          <h3 className="about__heading">{aboutText.title}</h3>
          <p className="about__subtitle">{aboutText.subtitle}</p>
          <p className="about__social">find me on
            <a className="about__link"><div className={`about__icon ${aboutDark ? 'about__icon_github_white' : 'about__icon_github'}`}></div></a>
            </p>
        </div>
      </article>
    </section>
  )
}

export default About;
