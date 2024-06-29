import'./connect_page.css';
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaGit, FaGithub, FaLinkedin, FaMapLocationDot } from "react-icons/fa6";
import { Divider } from '@mui/material';

const Connect = () => {

    return(
        <div id = "connect">
            <div id = "connect_title"> Connect with me!!! </div>
            <div id = "connect_card"> 
                <div id = "upper">
                <div id = "details">
                    <div className="detail" id = "phone">
                        <FiPhoneCall size={"32px"} className="connect_icon"/>
                        <div> +91 99879 98424 </div>
                    </div>
                    <div className="detail" id = "email">
                        <SiGmail size={"32px"} className="connect_icon"/>
                        <div> rohitb.bhandwalkar@gmail.com </div>
                    </div>
                    <div className="detail" id = "location">
                        <FaMapLocationDot size={"32px"} className="connect_icon"/>
                        <div> Navi Mumbai, India </div>
                    </div>
                </div>
                <div id = "divider"></div>
                <div id = "message"> I'd love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Let's create something amazing together!! </div>
                </div>
                <div id = "lower">
                    <a href = "https://github.com/RohitBB3010" target="_blank"> <FaGithub size={"2.5vw"} className = "lower_link" /> </a>
                    <a href = "https://www.linkedin.com/in/rohit-bhandwalkar/" target="_blank"> <FaLinkedin size={"2.5vw"} className = "lower_link"/> </a>
                </div>
            </div>
        </div>
    );
}

export default Connect;