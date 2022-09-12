import React from 'react'
import "./SkillsSection.css"

function SkillsSection(props) {
    return (
        <div>
            <section className="skills-section" style={{fontFamily:props.skillsSectionFontFamily}}>
                <div className="max-width">
                    <div className="my-skills-text-container">
                        <div className="my-skills-text">My Skills</div>
                        <div className="under-my-skills-text">{props.underMySkillsText}</div>
                    </div>
                    <div className="main-section">
                        <div className="left-side-container">
                            <div className="first-section">
                                <div className="image-container">
                                    <img src={require("../../images/skills-component-images/Design.png")} alt="" />
                                </div>
                                <div className="text-container">
                                    <div className="first-line">Designs + Performance</div>
                                    <div className="second-line">Clean & Modern Designs Also Optmized For Performance, & Search Engines.</div>
                                </div>
                            </div>
                            <div className="second-section">
                                <div className="image-container">
                                    <img src={require("../../images/skills-component-images/Responsive.png")} alt="" />
                                </div>
                                <div className="text-container">
                                    <div className="first-line">Responsive</div>
                                    <div className="second-line">A Responsive Design Always Makes Your Website Accessible To All Users & Devices.</div>
                                </div>
                            </div>
                            <div className="third-section">
                                <div className="image-container">
                                    <img src={require("../../images/skills-component-images/Technology.png")} alt="" />
                                </div>
                                <div className="text-container">
                                    <div className="first-line">Technology</div>
                                    <div className="second-line">Combined All The Latest Technologies To A Progressive Website.</div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-container">
                            <p>HTML</p>
                            <div class="container">
                                <div class="skills html">80%</div>
                            </div>
                            <p>CSS</p>
                            <div class="container">
                                <div class="skills css">80%</div>
                            </div>
                            <p>JavaScript</p>
                            <div class="container">
                                <div class="skills js">50%</div>
                            </div>
                            <p>ReactJS</p>
                            <div class="container">
                                <div class="skills reactJS">50%</div>
                            </div>
                            <p>Bootstrap</p>
                            <div class="container">
                                <div class="skills bootstrap">60%</div>
                            </div>
                            <p>Adobe PhotoShop</p>
                            <div class="container">
                                <div class="skills adobePhotoshop">40%</div>
                            </div>
                            <p>Adobe Premier Pro</p>
                            <div class="container">
                                <div class="skills adobePremierPro">60%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsSection;