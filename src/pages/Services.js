import React from 'react'
import NavBar from "../components/NavBarComponent/NavBar";
import ServicesOfferedComponent from '../components/ServicesOfferedComponent/ServicesOfferedComponent';

function Services() {
    return (
        <div>
            <NavBar
                navBarOption3TextDecoration="underline"
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
            <ServicesOfferedComponent
            servicesOfferedFontFamily="Mabook"
            />
        </div>
    )
}

export default Services