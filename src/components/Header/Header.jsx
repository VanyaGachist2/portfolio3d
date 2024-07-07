import './Header.css';

function Header({ isDark, toogleButton }) {
  return (
    <header className={`header ${isDark ? 'header_dark' : ''}`}>
      <section className={`header__container ${isDark ? 'header__container_dark' : ''}`}>
        <div className="header__logo"></div>
        <nav className='header__nav'>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Home</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>About</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Skills</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Projects</a>
          <a href='#' className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Contact</a>
        </nav>
        <button onClick={toogleButton} className={`header__button ${isDark ? 'header__button_dark' : ''}`}>
          <div className={`header__svg ${isDark ? 'header__svg_dark' : ''}`}></div>
        </button>
      </section>
    </header>
  )
}

export default Header;
