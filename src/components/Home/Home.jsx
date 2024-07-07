import './Home.css';
import Three from './Three';
import { Canvas } from '@react-three/fiber';

function Home () {
  return (
    <section className="home">
      <article className="home__container">
        <div className="home__message">
          <h1 className="home__title">@Vanya</h1>
          <p className='home__sub'>front-end developer 🇷🇺</p>
        </div>
        <Canvas className="home__canvas" camera={{ position: [0, 4, 5] }} >
          <Three />
        </Canvas>
      </article>
    </section>
  )
}

export default Home;
