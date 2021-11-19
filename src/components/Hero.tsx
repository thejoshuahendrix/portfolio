import { useEffect, useState } from 'react'
import styled from 'styled-components'
import hero from '../assets/background.jpg'


const HeroImage = styled.div`
width: 100%;
  height: 800px;
  background: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`
const HeroText = styled.div`
    z-index: 1;
  text-align: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 72px;
  
`
const Hero = () => {
    const [fadeProp, setFadeProp] = useState({ fade: 'invisible' })
    useEffect(() => {
        setFadeProp({
            fade: 'visible'
        })
    }, [fadeProp])
    return (
        <HeroImage>
            <HeroText className={fadeProp.fade} id="hero">Welcome</HeroText>
        </HeroImage>
    )
}

export default Hero
