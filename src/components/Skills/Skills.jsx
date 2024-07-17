import { Canvas } from '@react-three/fiber';
import './Skills.css';
import SkillsAnimation from './SkillsAnimation';

function Skills ({ darkSkills }) {
  const textForSkills = {
    titleMain: '// Skills',
    description: 'rkfjrfjitgjtrigjirtjgirtjgirtgjirjgirtjgrt rtgijrtgijrtigjrtigjrijgirtjgirtjgirtjgirtjg trigjrtitgjritjgirtjgirtgirtjgirjtg trgjrtigjritjgrtig'
  }

  return (
    <section className={`skills ${darkSkills ? 'skills_dark' : ''}`}>
      <article className={`skills__container ${darkSkills ? 'skills__container_dark' : ''}`}>
        <div className='skills__skills'>
          <h2 className='skills__heading'>{textForSkills.titleMain}</h2>
          <p className='skills__description'>{textForSkills.description}</p>
        </div>
        <div className='skills__animate'>
          <Canvas className='skills__canvas' camera={{ position: [5, 0, 18] }}>
            <SkillsAnimation />
          </Canvas>
        </div>
      </article>
    </section>
  )
}

export default Skills;
