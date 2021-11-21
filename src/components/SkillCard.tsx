import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skill } from '../types/skills'

interface PropTypes {
    skill:Skill;
}

const SkillCard = ({ skill }: PropTypes) => {
    return (
        <div>

            <h2><FontAwesomeIcon style={{color:skill.color}} size="4x" icon={[skill.iconType, skill.icon]} /> {skill.title}</h2><p>{skill.description}</p>

        </div>
    )
}

export default SkillCard
