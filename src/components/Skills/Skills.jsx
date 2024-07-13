import { Canvas } from '@react-three/fiber';
import TitleMain from '../TitleMain/TitleMain';
import './Skills.css';
import SkillsAnimation from './SkillsAnimation';

function Skills ({ darkSkills }) {
  const textForSkills = {
    titleMain: 'Skills',
    description: 'rkfjrfjitgjtrigjirtjgirtjgirtgjirjgirtjgrt rtgijrtgijrtigjrtigjrijgirtjgirtjgirtjgirtjg trigjrtitgjritjgirtjgirtgirtjgirjtg trgjrtigjritjgrtig'
  }

  return (
    <section className={`skills ${darkSkills ? 'skills_dark' : ''}`}>
      <article className={`skills__container ${darkSkills ? 'skills__container_dark' : ''}`}>
        <TitleMain name={textForSkills.titleMain} isTrue={darkSkills} />
        <div className='skills__skills'>
        <p className='skills__description'>{textForSkills.description}</p>
        <div className='skills__animate'>
          <Canvas className='skills__canvas' camera={{ position: [5, 0, 18] }}>
            <SkillsAnimation />
          </Canvas>
        </div>
        </div>
      </article>
    </section>
  )
}

export default Skills;
