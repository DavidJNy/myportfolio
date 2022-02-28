import React from 'react'
import { projects } from '../data';

function Projects() {
    return (
        <container>
            <div class="p-3 mb-2 bg-dark text-white">
                <div class=" ">
                    <h1>
                        Projects and future apps
                    </h1>
                    <p>
                        Here is a list of my projects and prospective projects.
                    </p>
                </div>
                <div>
                    {projects.map((project) => (
                        <a href={project.link} key={project.image}>
                            <div>
                                <div>
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h4>
                                        {project.title}
                                    </h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </container>
    );
}

export default Projects;