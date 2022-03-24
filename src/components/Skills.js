import React from 'react';
import { skills } from "../data";
import { FaCheckCircle, FaRegSmileWink} from 'react-icons/fa';
import './Skills.css';

function Skills() {
    return (
        <div class="container p-3 mb-2 bg-dark text-light">
                <div class="text-center">
                    <h1>
                        List of Skills and Accomplishments
                    </h1>
                </div>
                <div class="row">
                    {skills.map((skill) => (
                        <div class="col-2 justify-content-center" key={skill}>
                                <FaCheckCircle />
                                <span class="p-1 bg-light text-dark" id="skills">
                                    {skill}
                                </span>
                        </div>
                    ))}
                </div>
            <p class=''>*following skills are in progress.&nbsp;&nbsp;<FaRegSmileWink /></p> 
        </div>
    );
}

export default Skills;

//adjust the skills so they don't break. use CSS !important

//https://react-bootstrap.netlify.app/components/cards/