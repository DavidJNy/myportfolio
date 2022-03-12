import React from 'react';
import { skills } from "../data";
import { FaCheckCircle, FaRegSmileWink} from 'react-icons/fa';
import './Skills.css';

function Skills() {
    return (
        <div class="container bg-dark text-light">
                <div class="text-center">
                    <h1>
                        List of Skills and Accomplishments
                    </h1>
                </div>
                <div class="row">
                    {skills.map((skill) => (
                        <div class="col-3" key={skill}>
                            <div class="justify-content-center">
                                <FaCheckCircle />
                                <span class="text-break p-1 mb-1 bg-light text-dark">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            <p class=''>*following skills are in progress.&nbsp;&nbsp;<FaRegSmileWink /></p> 
        </div>
    );
}

export default Skills;

//https://react-bootstrap.netlify.app/components/cards/