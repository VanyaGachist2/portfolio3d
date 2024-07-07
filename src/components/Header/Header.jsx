import './Header.css';

function Header({ isDark, toogleButton }) {
  const links = [
    {
      href: '#',
      title: 'Home',
    },
    {
      href: '#',
      title: 'About',
    },
    {
      href: '#',
      title: 'Skills',
    },
    {
      href: '#',
      title: 'Projects',
    },
    {
      href: '#',
      title: 'Contact',
    },
  ]
  return (
    <header className={`header ${isDark ? 'header_dark' : ''}`}>
      <section className={`header__container ${isDark ? 'header__container_dark' : ''}`}>
        <div className="header__logo"></div>
        <nav className='header__nav'>
          {links.map((a, i) => {
            return (
              <a
                href={a.href}
                key={i}
                className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>
                {a.title}
              </a>
            )
          })}
        </nav>
        <button onClick={toogleButton} className={`header__button ${isDark ? 'header__button_dark' : ''}`}>
          <div className={`header__svg ${isDark ? 'header__svg_dark' : ''}`}></div>
        </button>
      </section>
    </header>
  )
}

export default Header;

/*
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Home</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>About</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Skills</a>
          <a href="#" className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Projects</a>
          <a href='#' className={`header__link ${isDark ? 'header__link_color_dark' : ''}`}>Contact</a>
          */
