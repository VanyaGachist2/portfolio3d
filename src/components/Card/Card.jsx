import './Card.css';

function Card ({ openCard, card, onClose }) {
  return (
    <div className={`card ${openCard ? 'card_opened' : ''}`}>
      <div className='card__container'>
        <ul className='card__list'>
          <li className='card__card'>
            <img className='card__image' alt='#' src={card?.images.firstImage} />
          </li>
        </ul>
        <h2 className='card__heading'>{card?.title}</h2>
        <p className='card__description'>
        {card?.subtitle}
        </p>
        <button onClick={onClose} className='card__close'></button>
      </div>
    </div>
  )
}

export default Card;
