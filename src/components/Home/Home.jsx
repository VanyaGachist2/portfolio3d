import './Home.css';

import {
  useState,
  useEffect
} from 'react';
import Three from './Three';
import { Canvas } from '@react-three/fiber';

function Home () {
  const [currentWord, setCurrentWord] = useState(0);
  const [typeMessage, setTypeMessage] = useState('');
  const words = [
    'web-developer',
    'computer gaming',
    'javaScript',
    'fullstack'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    const message = words[currentWord];
    let i = 0;

    const interval = setInterval(() => {
      if (i < message.length) {
        setTypeMessage(message.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentWord, words]);

  return (
    <section className="home">
      <article className="home__container">
        <div className="home__message">
          <h1 className="home__title">@Vanya</h1>
          <p className="home__subtitle">{typeMessage}</p>
        </div>
        <Canvas className="home__canvas" camera={{ position: [0, 2, 5] }} >
          <Three />
        </Canvas>
      </article>
    </section>
  )
}

export default Home;
