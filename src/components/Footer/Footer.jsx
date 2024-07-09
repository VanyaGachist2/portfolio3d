import './Footer.css';

function Footer () {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer__container'>
        <p className='footer__date'>{date} @Vanya. All rights reserved.</p>
        <p className='footer__desc'>PIPISUKIO</p>
      </div>
    </footer>
  )
}
export default Footer;
