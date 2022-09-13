import React from 'react'
import AboutMe from '../components/AboutMeComponent/AboutMe'
import NavBar from '../components/NavBarComponent/NavBar'
import SkillsSection from '../components/SkillsComponent/SkillsSection'

function Skills() {
    return (
        <div>
            <NavBar
                navBarOption2TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"
                navBarOption1="home"
                navBarOption2="skills"
                navBarOption3="services"
                navBarOption4="pricing"
                navBarOption5="projects"
                navBarOption6="contact"/>
                <AboutMe
                aboutMeBackgroundColor="white"
                headingTextFontFamily="Mabook"
                headingText="About Me"
                headingColor="crimson"
                buttonDisplay="none"
                aboutMeText="I am A Front End Web Developer, and also a Gaming Content Creator on YouTube, but also worked with many other platforms like Rooter, & Moj, and with few other new brands. Currently I have learned HTML, CSS, JS, jQuery, Bootstrap. Currently learning React JS too, but as you can see this project is made on React JS. My future plan is to become MERN Stack. Even I Know Photoshop, Premier Pro, & a little bit After Effects."
                />
                <SkillsSection
                skillsSectionFontFamily="Mabook"
                mySkillsTextColor="crimson"
                />
        </div>
    )
}

export default Skills