import React from 'react'
import NavBar from '../components/NavBarComponent/NavBar'

function AboutUs() {
    return (
        <div>
            <NavBar
                navBarOption2TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"
                navBarOption1="home"
                navBarOption2="about"
                navBarOption3="services"
                navBarOption4="pricing"
                navBarOption5="projects"
                navBarOption6="contact"/>
        </div>
    )
}

export default AboutUs