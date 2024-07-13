import TitleMain from '../TitleMain/TitleMain';
import './Projects.css';

function Projects ({ card, onClick, projectDark }) {
  const textForProjects = {
    titleMain: 'Projects',
  }

  const handleOpenTheCard = () => {
    onClick(card.images.firstImage, card.title, card.subtitle);
  }

  return (
    <section className={`projects ${projectDark ? 'projects_dark' : ''}`}>
      <article className={`projects__container ${projectDark ? 'projects__container_dark' : ''}`}>
        <TitleMain isTrue={projectDark} name={textForProjects.titleMain} />
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

