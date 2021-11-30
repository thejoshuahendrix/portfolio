import styled from 'styled-components'
import JobList from '../components/JobList'

const AboutWrapper= styled.div`
    display: flex;
    flex-direction: column;
    margin: 20%;
    text-align: center;
    gap: 30px;

`

const About = () => {
    return (
        <AboutWrapper>
            <h1>About Me:</h1><br/>

            I am a fullstack software developer with a history than spans over 15 years.
            My early days programming were used to develop games, but now I work with the web.
            I have freelancing experience and a lot of personal experience building web apps and services.
            
        <h2> Previous Work Experience: </h2>
            <JobList />
        </AboutWrapper>
    )
}

export default About
