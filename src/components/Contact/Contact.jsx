import TitleMain from '../TitleMain/TitleMain';
import './Contact.css';

function Contact () {
  return (
    <section className="contact">
      <article className="contact__container">
        <TitleMain name='Contact' />
        <form className='contact__form'>
          <input
            type='text'
            className='contact__input'
            placeholder='Name'
            />
          <input
            type='text'
            className='contact__input'
            placeholder='Email'
            />
          <textarea
            className='contact__area'
            placeholder='Who are you?'
            rows='10'
            ></textarea>
          <div className='contact__buttons'>
            <a href='https://vk.com/ibolvan123' className='contact__link contact__link_telegram'></a>
            <a href='https://github.com/VanyaGachist2' className='contact__link contact__link_github'></a>
            <a href='#' className='contact__link contact__link_steam'></a>
          </div>
          <button type='submit' className='contact__button'>Отправить</button>
        </form>
      </article>
    </section>
  )
}

export default Contact;
