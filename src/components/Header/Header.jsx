import './Header.css';

function Header() {
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
      </section>
    </header>
  )
}

export default Header;
