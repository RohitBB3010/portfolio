import './skills.css';

const Skills = () => {

    const skills = ["flutter", "reactjs", "nodejs", "expressjs", "mongodb", "javascript", "firebase", "java", "dart", "c", "html" , "css"];

    const tools = ["git", "figma", "vscode"];

    console.log(skills.length);
    return(
        <div className="skills" id= "skills">
            <div className="skills_title"> Professional Skillset </div>
            <div className="professional_skillset"> 
                {
                    skills.map((skill) => {
                        return <img src = {`skills_white/${skill}.svg`} alt = {skill} className="skills_icons"/> 
                    })
                }
            </div>
            <div className="tools_title"> Tools </div>
            <div className="tools_set"> 
                {
                    tools.map((skill) => {
                        return <img src = {`tools_white/${skill}.svg`} alt = {skill} className="tools_icons"/> 
                    })
                }
            </div>
        </div>
    );
}

export default Skills;