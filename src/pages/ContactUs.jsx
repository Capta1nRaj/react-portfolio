import React from 'react'
import NavBar from "../components/NavBarComponent/NavBar";

function ContactUs() {
  return (
    <div>
        <NavBar
                navBarOption6TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"/>
    </div>
  )
}

export default ContactUs