import './Home.css';
import Three from './Three';
import { Canvas } from '@react-three/fiber';

function Home ({ homeDark }) {
  const lightImage = 'https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=29&pause=1000&color=5A5A5A&random=false&width=435&lines=front-end+developer';
  const darkImage = 'https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=29&pause=1000&color=F1B2CE&random=false&width=435&lines=front-end+developer';

  return (
    <section className={`home ${homeDark ? 'home_dark' : ''}`}>
      <article className={`home__container ${homeDark ? 'home__container_dark' : ''}`}>
        <div className="home__message">
          <h1 className="home__title">@Vanya</h1>
          <p><img src={homeDark ? darkImage : lightImage} alt="Typing SVG" /></p>
        </div>
        <div className='home__animate'>
        <Canvas className="home__canvas" camera={{ position: [0, 4, 5] }} >
          <Three />
        </Canvas>
        </div>
      </article>
    </section>
  )
}

export default Home;
