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
            ></textarea>
          <div className='contact__buttons'>
            <a href='https://vk.com/ibolvan123' className='contact__link contact__link_vk'></a>
            <a href='#' className='contact__link contact__link_github'></a>
          </div>
          <button type='submit' className='contact__button'>Отправить</button>
        </form>
      </article>
    </section>
  )
}

export default Contact;
