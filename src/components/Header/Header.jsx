import { useState } from 'react';
import './Header.css';

function Header() {
  const [isDark, setIsDark] = useState(false);

  const toogleButton = () => {
    setIsDark(!isDark);
  }

  return (
    <header className="header">
      <section className="header__container">
        <div className="header__logo"></div>
        <nav className='header__nav'>
          <a href="#" className="header__link">Home</a>
          <a href="#" className="header__link">About</a>
          <a href="#" className="header__link">Projects</a>
          <a href="#" className="header__link">Contact</a>
        </nav>
        <button onClick={toogleButton} className='header__button'>
          <div className={`header__svg ${isDark ? 'header__svg_dark' : ''}`}></div>
        </button>
      </section>
    </header>
  )
}

export default Header;
