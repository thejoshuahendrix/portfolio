import styled from 'styled-components'
import BadgeDisplay from '../components/BadgeDisplay'

const HomeWrapper = styled.div`
    width: 30%;
     margin: 50px auto 50px auto;
     height: 30vh;
`

const Home = () => {
    return (
        <>
            <HomeWrapper>
                <h3>Welcome to my portfolio website. I am a fullstack developer currently working freelance. I love Typescript and React as my main stack. </h3>
            </HomeWrapper>
            <BadgeDisplay />
        </>
    )
}

export default Home
