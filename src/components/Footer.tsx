import React from 'react'
import styled from 'styled-components'

const BottomBar = styled.div`
    margin-top: 20%;
    background: #242424;
    bottom: 0;
    height: 50px;
    position: sticky;
`
const FooterText = styled.div`
    display: grid;
    justify-items: center;
    padding: 1rem 0 0 0;
    color: white;
`

const Footer = () => {
    return (
        <BottomBar>
            <FooterText>
                Footer
            </FooterText>
        </BottomBar>
    )
}

export default Footer
