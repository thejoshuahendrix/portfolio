import styled from 'styled-components'
import { Skill } from '../types/skills'
import SkillCard from './SkillCard'



const skillsList1: Skill[] = [{
    title: "Javascript",
    description: "I work with Javascript and it is my jam.",
    icon: "js-square",
    iconType: "fab",
    color: "#b4a90a"
},
{
    title: "Java",
    description: "I can code mobile with Java through Android Studio.",
    icon: "java",
    iconType: "fab",
    color: "#8b2222"

},

{
    title: "React",
    description: "I work with React, and I love working with it.",
    icon: "react",
    iconType: "fab",
    color: "#25769c"

},

{
    title: "NodeJS",
    description: "I work with Node on my backend projects.",
    icon: "node",
    iconType: "fab",
    color: "#1d6317"

}];

const skillsList2: Skill[] = [{
    title: "HTML",
    description: "The building block of the web is my forte.",
    icon: "html5",
    iconType: "fab",
    color: "#a81818"

},
{
    title: "CSS",
    description: "Of course I love to style my apps.",
    icon: "css3",
    iconType: "fab",
    color: "#210c97"

},
{
    title: "PHP",
    description: "I enjoy working with, and building with PHP.",
    icon: "php",
    iconType: "fab",
    color: "#480c97"

},
{
    title: "Python",
    description: "I love Python for algorithms and data science.",
    icon: "python",
    iconType: "fab",
    color: "#0c5897"

}]

export const SkillWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    gap: 2rem .05rem;
    padding: 0 10% 0 10%;
`

export const SkillHeading = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    font-size: 24px;
`

const SkillList = () => {
    return (
        <>
            <SkillHeading>My Skills:</SkillHeading>
            <SkillWrapper>
                {skillsList1.map(skill => {
                    return <SkillCard skill={skill} />
                })}
            </SkillWrapper>
            <SkillWrapper>
                {skillsList2.map(skill => {
                    return <SkillCard skill={skill} />
                })}
            </SkillWrapper>
        </>
    )
}

export default SkillList
