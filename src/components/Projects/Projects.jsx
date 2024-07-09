import TitleMain from '../TitleMain/TitleMain';
import './Projects.css';

function Projects ({ card, onClick }) {
  const textForProjects = {
    titleMain: 'Projects',
  }

  const handleOpenTheCard = () => {
    onClick(card.images.firstImage, card.title, card.subtitle);
  }

  return (
    <section className="projects">
      <article className='projects__container'>
        <TitleMain name={textForProjects.titleMain} />
          <ul className='projects__list'>
            {card.map((c) => {
              return (
                <li key={c.id} className='projects__div'>
                  <img onClick={handleOpenTheCard} className='projects__img' alt='#' src={c.images.firstImage} />
                </li>
              )
            })}
          </ul>
      </article>

    </section>
  )
}

export default Projects;

