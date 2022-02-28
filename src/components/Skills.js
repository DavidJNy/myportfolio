import React from 'react'
import { skills } from "../data";
import { FaCheckCircle, FaRegSmileWink} from 'react-icons/fa';

function Skills() {
    return (
        <section>
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
        </section>
    );
}

export default Skills;

//https://react-bootstrap.netlify.app/components/cards/