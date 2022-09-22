import React from "react";
import "./ContactUsComponent.css";

function ContactUsComponent() {
    return (
        <div>
            <section className="contact-us-component-section">
                <div className="max-width">
                    <div className="heading-container">
                        <div className="line-1">Contact Us</div>
                        <div className="line-2">Feel Free To Contact Us For Any Queries</div>
                    </div>
                    <div className="contact-form">
                        <div className="boxing">
                            <div className="left-section">
                                <div className="line-1">CONTACT US</div>
                                <div className="line-2">CONTACT INFO:- 123-456-789-0</div>
                            </div>
                            <div className="right-section">
                                <div className="input-name">
                                    <input className="input-name-form" type="text" placeholder="Name" />
                                </div>
                                <div className="input-email">
                                    <input className="input-name-form" type="email" placeholder="Email" />
                                </div>
                                <div className="input-contact-number">
                                    <input className="input-name-form" type="text" placeholder="Contact No" />
                                </div>
                                <div className="input-message">
                                    <input className="input-name-form" type="text" placeholder="Message" />
                                </div>
                                <div className="buttons-container">
                                    <input className="button-1" type="button" value="Reset" />
                                    <input className="button-2" type="button" value="Send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUsComponent;
