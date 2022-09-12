import React from 'react'
import IntroComponent from '../components/IntroComponent/IntroComponent'
import NavBar from '../components/NavBarComponent/NavBar'

function HomePage() {
    return (
        <div>
            <NavBar
                navBarOption1TextDecoration="underline"
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
            <IntroComponent
                backgroundImage={require("../images/intro-component-images/banner3.jpg")}
                IntroComponentFontFamily="Mabook"
                profession={["Front End Web Dev", "YouTuber", "Gamer", "Freelancer"]}/>
        </div>
    )
}

export default HomePage