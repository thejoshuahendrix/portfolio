import ProjectSection from '../components/ProjectSection';
import SkillList from '../components/SkillList';
import project1 from '../assets/pro1.jpg';
import project2 from '../assets/pro2.jpg';
import project3 from '../assets/pro3.jpg';
import project4 from '../assets/pro4.jpg';
import { Project } from '../types/projects';


export const fullstack: Project = {
    title:"Fullstack Project",
    description:"This application allows a user to register and login via JSON web token and uses MongoDB Atlas for user authentication. This app has a post system with CRUD functionality as well as admin roles that can manage user accounts, as well as moderate the post system.",
    link:"http://jwtmern.herokuapp.com",
    image:project1
}
export const binary: Project = {
    title:"BinaryvsLinear",
    description:"This application displays a visual representation of a binary and linear search. It was built with pure JavaScript. The application takes an object-oriented approach to the solution, by defining a Node class that is searched using binary search on one number line and linear search on the other. The target node is highlighted upon processing as each step in the program is slowed to one second using intervals to display the difference in time complexity.",
    link:"http://binarysearch.herokuapp.com",
    image:project2
}

export const bugtrack: Project = {
    title:"BugTracker",
    description:"This is an Android app that takes bug descriptions to an SQLite DB and writes to a file",
    image:project3
}

export const wall: Project = {
    title:"The Wall",
    description:"This is a social media website I built to display my full stack abilities using a PHP/MySQL/Linux backend, and custom HTML and CSS template I designed. It  includes user registration and login, the ability to post to a wall then subsequently edit and delete posts that you have created. The posts are saved to a MySQL server running on a Linux virtual machine.",
    image:project4
}





const Portfolio = () => {
    return (
        <div>
            <SkillList />
            <ProjectSection project={fullstack} left={true} />

            <ProjectSection project={binary} left={false}  />

            <ProjectSection project={bugtrack} left={true}  />

            <ProjectSection  project={wall} left={false}  />
        </div>

    )
}

export default Portfolio
