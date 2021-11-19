import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopBar = styled.div`
    height: 50px;
    background: #242424;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 0.5rem 0 0 0;
    z-index: 120;
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
`
const Logo = styled.div`
    font-size: 32px;
    display: grid;
    justify-items: center;
    width: 50px;
    height: 50px;
`
const LinkWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: .5rem 1rem 0 1rem;
    font-size: 24px;
    gap: 2rem;
`



const Navbar = () => {
    return (
        <TopBar>
            <NavWrapper>
                <Logo><Link style={{ textDecoration: "none", color: 'white' }} to='/'>HS</Link></Logo>
                <LinkWrapper>
                    <Link style={{ textDecoration: "none", color: 'white' }} to='/contact'>Contact</Link>
                    <Link style={{ textDecoration: "none", color: 'white' }} to='/about'>About</Link>
                    <Link style={{ textDecoration: "none", color: 'white' }} to='/portfolio'>Portfolio</Link>
                </LinkWrapper>
            </NavWrapper>
        </TopBar>
    )
}

export default Navbar
