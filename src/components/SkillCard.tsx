import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Skill } from '../types/skills'

interface PropTypes {
    skill: Skill;
}

const SkillCard = ({ skill }: PropTypes) => {
    const [text, setText] = useState("")
    const handleDblClick = () => {
        setText("You double clicked me!");
    };
    return (
        <div onDoubleClick={handleDblClick}>

            <h2><FontAwesomeIcon style={{ color: skill.color }} size="4x" icon={[skill.iconType, skill.icon]} /> {skill.title}</h2><p>{skill.description}</p>
            <div>{text}</div>
        </div>
    )
}

export default SkillCard
