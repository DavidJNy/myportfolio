import React from 'react';
import { projects } from '../data';
import './Projects.css';

function Projects() {
    return (
        <div class="container bg-dark text-light">
            <div class="p-3 mb-2 bg-dark text-white">
                <div class="p-3 mb-2 text-light text-center">
                    <h1>
                        Projects and future apps
                    </h1>
                    <p>
                        Here is a list of my projects and prospective projects.
                    </p>
                </div>
                <div class="row">
                    {projects.map((project) => (
                        <a class="card" href={project.link} key={project.title}>
                            <img class="" src={project.image} alt="" />
                            <div>
                                <div>
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
        </div>
    );
}

export default Projects;