import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ProjectsComponent.css";
import projects from "../DatabaseComponent/ProjectDataBase";

function ProjectComponent(props) {
    return (
        <div>
            <section className="previous-project-component-section">
                <div className="max-width">
                    <div className="heading-container">
                        <div className="first-line" style={{ fontFamily: props.headingFontFamily, color: props.headingColor, fontSize: props.headingFontSize, margin: props.headingMargin }}>
                            {props.headingText}
                        </div>
                        <div className="second-line" style={{ fontFamily: props.headingCaptionFontFamily, color: props.headingCaptionColor, fontSize: props.headingCaptaionFontSize, margin: props.headingCaptionMargin, fontWeight: props.headingCaptionFontWeight }}>
                            {props.headingCaptionText}
                        </div>
                    </div>
                    <div className="projects-list-container">
                        {projects.slice(props.startingSliceValie, props.endingSliceValue).map((project, key) => {
                            return (
                                <div className="projects-boxes" key={key}>
                                    <div className="image-preview-container" style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={project.images} alt="" style={{ width: "150px", filter: project.filter }} />
                                    </div>
                                    <div className="about-project-container">
                                        <div className="project-name">{project.projectName}</div>
                                        <div className="about-project">{project.aboutProject}</div>
                                        <div className="buttonComponent">
                                            <div>
                                                <ButtonComponent
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ height: "30px", width: "30px", marginBottom: "20px" }}
                                                    hrefLink={project.githubLink}
                                                    border="1px solid red"
                                                    backgroundColor="crimson"
                                                    onHoverBackGroundColor="transparent"
                                                    color="white"
                                                    onHoverColor="crimson"
                                                    padding="15px 30px"
                                                    borderRadius="6px"
                                                    fontFamily="Mont-HeavyDEMO"
                                                    fontSize="20px"
                                                    transition="all 0.4s ease-in-out"
                                                    buttonText="GitHub"
                                                />
                                            </div>
                                            <div>
                                                <ButtonComponent
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ height: "30px", width: "30px" }}
                                                    hrefLink={project.demoLink}
                                                    border="1px solid red"
                                                    backgroundColor="crimson"
                                                    onHoverBackGroundColor="transparent"
                                                    color="white"
                                                    onHoverColor="crimson"
                                                    padding="15px 40px"
                                                    borderRadius="6px"
                                                    fontFamily="Mont-HeavyDEMO"
                                                    fontSize="20px"
                                                    transition="all 0.4s ease-in-out"
                                                    buttonText="Demo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectComponent;
