import TimeLineCard from './timeLineCard';
import {Timeline} from '@mui/lab';
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import './education.css';

const Education = () => {

    return(
        <div className="education">
          <div id = "title"> Education </div>
          <Timeline position="alternate">
            <TimeLineCard timeLine="2021 - 2025" institute="Vidyalankar Institute of Technology" cgpa="Average CGPA = 9.6" icon={<FaGraduationCap size = "4vh" color="green"/>} cgpaPosition = "start"/> 
            <TimeLineCard timeLine="2018 - 2020" institute="Chandrabhan Sharma College of Science, Arts and Commerce" cgpa="Percentage : 78%" icon={<FaSchool size = "4vh" color="green"/>} cgpaPosition = "end"/> 
            <TimeLineCard timeLine="2016" institute="St.Joseph's High School, Kalamboli" cgpa="Percentage : 95%" icon = {<GiSchoolBag size="4vh" color="green"/>} cgpaPosition = "start"/>
          </Timeline>
        </div>
          
    );
}

export default Education;