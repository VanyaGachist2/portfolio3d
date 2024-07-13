import './Home.css';
import Three from './Three';
import { Canvas } from '@react-three/fiber';

function Home ({ homeDark }) {
  let currentAge = 20;
  const currentDay = new Date();
  const getDay = currentDay.getDate();
  const getMonth = currentDay.getMonth();
  if (getDay === 5 && getMonth === 11) {
    currentAge += 1;
  }

  return (
    <section className={`home ${homeDark ? 'home_dark' : ''}`}>
      <article className={`home__container ${homeDark ? 'home__container_dark' : ''}`}>
        <div className="home__message">
          <h1 className="home__title">@Vanya</h1>
          <p className='home__web'>
            {currentAge}. shutnik</p>
          <p className='home__web'>gamer.</p>
          <p className='home__second'>all for developers.</p>
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
