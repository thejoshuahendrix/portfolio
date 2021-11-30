import styled from 'styled-components'
import { Project } from '../types/projects'

const SectionWrapper = styled.div`
    margin: 10%;
    padding: 20px;
    border: 1px solid red;
    display: flex;
    justify-content: space-evenly;
`
const SectionDescription = styled.div`
    padding: 20px 20px 20px 20px;
`

interface PropTypes {
    project: Project;
    left: boolean;
    
}

const ProjectSection = ({ project, left }: PropTypes) => {
    return (
        <div>
            {left ?

                <SectionWrapper>
                    <SectionDescription>
                        <h2>{project.title}</h2>
                        {project.description}
                        {project.link?<div><a href={project.link}>Live Demo</a></div>:""}
                    </SectionDescription>
                    <img style={{width:"650px", height:"350px"}} src={project.image} alt="project" />

                </SectionWrapper> : <SectionWrapper>
                    <img style={{width:"650px" , height:"350px"}} src={project.image} alt="project" />
                    <SectionDescription>
                    <h2>{project.title}</h2>
                        {project.description}
                        {project.link?<div><a href={project.link}>Live Demo</a></div>:""}
                    </SectionDescription>


                </SectionWrapper>



            }

        </div>
    )
}

export default ProjectSection
