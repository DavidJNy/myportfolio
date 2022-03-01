import React from 'react'
import { skills } from "../data";
import { FaCheckCircle, FaRegSmileWink} from 'react-icons/fa';

function Skills() {
    return (
        <div class="container bg-dark text-light">
            <div>
                <div>
                    <h1>
                        List of Skills and Accomplishments
                    </h1>
                </div>
                <div>
                    {skills.map((skill) => (
                        <div key={skill}>
                            <div>
                                <FaCheckCircle />
                                <span>
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <p>*following skills are in progress.
                <br/> <FaRegSmileWink /></p> 
            </div>
        </div>
    );
}

export default Skills;

//https://react-bootstrap.netlify.app/components/cards/