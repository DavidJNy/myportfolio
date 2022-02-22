import React from 'react'
import { skills } from "../data";
import { FaCheckCircle } from 'react-icons/fa';

function Skills() {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        Here is a list of Skills and Accomplishments under my belt.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                    </p>
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
            </div>
        </section>
    );
}

export default Skills;