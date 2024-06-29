import './project_card.css';
import {FaGithub} from 'react-icons/fa';

const ProjectCard = ({projectData})  => {

    return(
        <div className="projectCard">
            <img src = {projectData.image}/>
            <div id="project_title"> {projectData.title} </div>
            <div id="techStack">
                <div id = "stack_title"> Tech Stack : </div>
                {
                    projectData.techStack.map((stack) => {
                        return(
                            
                            <img src = {`skills_colored/${stack}.svg`} alt = {stack} className = "stack_image" width={"25vw"} />
                        );
                    })
                }
            </div>
            <div id="description"> {projectData.description} </div>
            <div className="github-link">
               <FaGithub size={25} style={{ paddingRight: "0.5vw" }} />
               <div className="link-container">
               <div className="colon"> : </div>
               <a href={projectData.gitHubLink} className="link" target="_blank">{projectData.gitHubLink}</a>
               </div>
            </div>
        </div>
    );
}

export default ProjectCard;