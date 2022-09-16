import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ProjectsComponent.css";

function ProjectComponent(props) {
    const projects = [
        {
            key: 0,
            images: require("../../images/projects-component-images/youtube-clone.png"),
            projectName: "Front End YouTube Clone",
            aboutProject: "YouTube Clone with Dark Mode, and Smooth Transitions, with a custom upload feature (not what you are expecting), to upload a custom video, just click on the upload icon, and to go back click on the YouTube logo or back button, thanks.",
            githubLink: "https://github.com/Capta1nRaj/youtube-clone",
            demoLink: "https://capta1nraj.github.io/youtube-clone/",
            filter: ""
        },
        {
            key: 1,
            images: require("../../images/projects-component-images/karafuru-clone.png"),
            projectName: "Karafuru Clone",
            aboutProject: "Karafuru is home to 5555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.",
            githubLink: "https://github.com/Capta1nRaj/karafuru-clone",
            demoLink: "https://capta1nraj.github.io/karafuru-clone/",
            filter: ""
        },
        {
            key: 2,
            images: require("../../images/projects-component-images/random-password-generator.png"),
            projectName: "Random Password Generator",
            aboutProject: "This project will have 2 types of Random Password Generator. Method 1 is just fixed with 12 values of password, whereas, Method 2 is customizable in which characters include, and exclude, and the length of the password can be customized. Both have copy clipboard function.",
            githubLink: "https://github.com/Capta1nRaj/random-password-generator",
            demoLink: "https://capta1nraj.github.io/random-password-generator/",
            filter: ""
        },
        {
            key: 3,
            images: require("../../images/navigation-bar-component-images/logo.png"),
            projectName: "My Portfolio",
            aboutProject: "This is a project + portfolio based on ReactJS, I have already made a Portfolio with ReactJS but it was just for learning Purpose.",
            githubLink: "https://github.com/Capta1nRaj/react-portfolio",
            demoLink: "https://capta1nraj.github.io/react-portfolio/",
            filter: "invert(100%)"
        },
        {
            key: 4,
            images: require("../../images/projects-component-images/robottoz.png"),
            projectName: "Robottoz Clone",
            aboutProject: "Just A Simple Single Page NFT Website Template. Robottoz is the 1st MetaBlub release, a NFT collection of 4444 unique handdrawn 50's art with traits like any other robot out there.",
            githubLink: "https://github.com/Capta1nRaj/robottoz-clone",
            demoLink: "https://capta1nraj.github.io/robottoz-clone/",
            filter: ""
        },
        {
            key: 5,
            images: require("../../images/projects-component-images/upcoming-projects.png"),
            projectName: "Upcoming Projects",
            aboutProject: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi non, nam alias et eveniet suscipit consequatur",
            githubLink: "/",
            demoLink: "/",
            filter: ""
        },
    ];

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
                        {projects.slice(0, props.sliceValue).map((project, key) => {
                            return (
                                <div className="projects-boxes" key={key}>
                                    <div className="image-preview-container" style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={project.images} alt="" style={{ width: "150px", filter:project.filter }} />
                                    </div>
                                    <div className="about-project-container">
                                        <div className="project-name">{project.projectName}</div>
                                        <div className="about-project">{project.aboutProject}</div>
                                        <div className="buttonComponent">
                                            <div>
                                                <ButtonComponent
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ "height": "30px", "width": "30px", "marginBottom": "20px" }}
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
                                                    buttonText="GitHub" />
                                            </div>
                                            <div>
                                                <ButtonComponent
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ "height": "30px", "width": "30px" }}
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
                                                    buttonText="Demo" />
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
