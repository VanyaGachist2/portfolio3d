import './Projects.css';

function Projects ({ onClick, projectDark }) {
  const textForProjects = {
    titleMain: 'Projects',
  }

  const handleOpenTheCard = () => {
    onClick(card.images.firstImage, card.title, card.subtitle);
  }

  return (
    <section className={`projects ${projectDark ? 'projects_dark' : ''}`}>
      <article className={`projects__container ${projectDark ? 'projects__container_dark' : ''}`}>
          <ul className='projects__list'>

          </ul>
      </article>

    </section>
  )
}

export default Projects;

