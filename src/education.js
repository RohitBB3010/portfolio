import TimeLineCard from './timeLineCard';
import {Timeline} from '@mui/lab';
import './education.css';

const Education = () => {

    return(
        <div className="education">
          <div id = "title"> Education </div>
          <Timeline position="alternate">
            <TimeLineCard timeLine="2021 - 2025" institute="Vidyalankar Institute of Technology" cgpa="Average CGPA = 9.6" /> 
            <TimeLineCard timeLine="2018 - 2020" institute="Chandrabhan Sharma College of Science, Arts and Commerce" cgpa="Percentage : 78%" /> 
            <TimeLineCard timeLine="2016" institute="St.Joseph's High School, Kalamboli" cgpa="Percentage : 95%" /> 
          </Timeline>
        </div>
          
    );
}

export default Education;