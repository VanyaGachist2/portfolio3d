import './Card.css';
import testOne from '../../assets/images/y7zI5l7gfhM';
import testTwo from '../../assets/images/встреча';

function Card ({ openCard }) {
  return (
    <div className={`card ${openCard ? 'card_opened' : ''}`}>
      <div className='card__container'>
        <ul className='card__list'>
          <li className='card__card'>
            <img className='card__image' alt='#' src={testOne} />
          </li>
        </ul>
        <h2 className='card__heading'>Test</h2>
        <p className='card__description'></p>
        <button className='card__close'></button>
      </div>
    </div>
  )
}

export default Card;
