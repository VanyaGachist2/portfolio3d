import { useEffect, useState } from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Home from './Home/Home'
import Skills from './Skills/Skills'

function App() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <main className='app'>
      <Header isDark={isDark} toogleButton={toogleButton} />
      <Home homeDark={isDark} />
      <About aboutDark={isDark} isTrue={isDark} />
      <Skills darkSkills={isDark} />
      <Contact />
    </main>
  )
}

export default App
