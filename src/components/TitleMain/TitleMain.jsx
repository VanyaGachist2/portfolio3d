import './TitleMain.css';

function TitleMain ({ name, isTrue }) {
  return (
    <div className='title'>
      <h2 className={`title__title ${isTrue ? 'title__title_white' : ''}`}>{name}</h2>
    </div>
  )
}

export default TitleMain;
