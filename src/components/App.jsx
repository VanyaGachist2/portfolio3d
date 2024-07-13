import { useCallback, useEffect, useState } from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Card from './Card/Card';
import Footer from './Footer/Footer'

import { cards } from '../utils/constForCards'

function App() {
  const [ isDark, setIsDark ] = useState(false);
  const [ isCardOpen, setIsCardOpen ] = useState(null);

  const toogleButton = () => {
    const changeTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', changeTheme);
  }

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      setIsDark(localStorageTheme === 'dark');
    }
  }, []);

  const openCardModal = useCallback((card) => {
    setIsCardOpen({ card })
  }, []);

  const closeCardModal = () => {
    setIsCardOpen(null);
  }

  return (
    <main className='app'>
      <Card card={isCardOpen} onClose={closeCardModal} />
      <Header isDark={isDark} toogleButton={toogleButton} />
      <Home homeDark={isDark} />
      <About aboutDark={isDark} isTrue={isDark} />
      <Skills darkSkills={isDark} />
      <Projects projectDark={isDark} onClick={openCardModal} card={cards} />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
