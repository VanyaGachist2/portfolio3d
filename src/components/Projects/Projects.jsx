import TitleMain from '../TitleMain/TitleMain';
import './Projects.css';
import meet from '../../assets/images/встреча.png';

function Projects () {
  const textForProjects = {
    titleMain: 'Projects',
  }
  return (
    <section className="projects">
      <article className='projects__container'>
        <TitleMain name={textForProjects.titleMain} />
          <ul className='projects__list'>
            <li className='projects__div'>
              <img className='projects__img' alt='#' src={meet} />
            </li>
            <li className='projects__div'>
              <img className='projects__img' alt='#' src={meet} />
            </li>
            <li className='projects__div'>
              <img className='projects__img' alt='#' src={meet} />
            </li>
            <li className='projects__div'>
              <img className='projects__img' alt='#' src={meet} />
            </li>
            <li className='projects__div'>
              <img className='projects__img' alt='#' src={meet} />
            </li>
          </ul>
      </article>

    </section>
  )
}

export default Projects;
