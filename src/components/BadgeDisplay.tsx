import React from 'react'
import styled from 'styled-components'
import { Badge } from '../types/badges'
import BadgeCard from './BadgeCard'
import { SkillWrapper } from './SkillList'

const webdev: Badge = {
    title: "Web Development",
    description: "I love working on the web with APIs, databases and servers.",
    icon: "code",
    iconType: "fas"
}
const mobiledev: Badge = {
    title: "Mobile Development",
    description: "Making mobile apps is something I truly enjoy, taking my skills mobile.",
    icon: "mobile",
    iconType: "fas"
}
const gamedev: Badge = {
    title: "Game Development",
    description: "I work with C++ and the Unreal Engine and love it as a hobby.",
    icon: "gamepad",
    iconType: "fas"
}
const leadership: Badge = {
    title: "Leadership",
    description: "I am ambitious and want to be a leader and mentor to others.",
    icon: "user-graduate",
    iconType: "fas"
}


export const BadgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    gap: 2rem 2rem;
    padding: 0 10% 0 10%;
`


const BadgeDisplay = () => {
    return (
        <>
            <BadgeWrapper>
                <BadgeCard badge={webdev} />
                <BadgeCard badge={mobiledev} />


            </BadgeWrapper>
            <BadgeWrapper>
                <BadgeCard badge={gamedev} />
                <BadgeCard badge={leadership} />



            </BadgeWrapper>
        </>

    )
}

export default BadgeDisplay
