import React from 'react'
import ContactUsComponent from '../components/ContactUsComponent/ContactUsComponent';
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
            <ContactUsComponent/>
        </div>
    )
}

export default ContactUs