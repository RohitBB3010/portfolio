import './projects.css'
import ProjectCard from './components/project_card';
import ProjectsData from './data/project_data';

const Projects = () => {
    return(
        <div className= "projects_section">
            <div className="projects_title"> Projects </div>
            <div className="projects">
                <div className="project_grid">
                    <ProjectCard projectData={ProjectsData.project1}/>
                    <ProjectCard projectData={ProjectsData.project2}/>
                    <ProjectCard projectData={ProjectsData.project3}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;