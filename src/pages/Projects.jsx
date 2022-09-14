import React from 'react'
import NavBar from '../components/NavBarComponent/NavBar'
import ProjectsComponent from '../components/ProjectsComponent/ProjectsComponent'

function Projects() {
  return (
    <div>
        <NavBar
                navBarOption5TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"/>
        <ProjectsComponent
                headingFontFamily="Mabook"
                headingColor="crimson"
                headingFontSize="40px"
                headingMargin="0 0 0 0"
                headingText="Our Projects"
                // Heading Caption
                headingCaptionFontFamily="Mont-ExtraLightDEMO"
                headingCaptionColor="gray"
                headingCaptaionFontSize="16px"
                headingCaptionMargin="20px 0 50px 0"
                headingCaptionFontWeight="bold"
                headingCaptionText="Here Are Few Of My Porjects I've Worked On Recently."
                sliceValue= "100"/>
    </div>
  )
}

export default Projects