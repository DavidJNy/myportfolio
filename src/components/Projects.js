import React from 'react';
import { projects } from '../data';
import './Projects.css';

function Projects() {
    return (
        <div id="Projects" class="container p-3 mb-2 bg-dark text-light">
            <div class="p-3 mb-2 bg-dark text-white">
                <div class="p-3 mb-2 text-light text-center">
                    <h1>
                        Future apps and projects
                    </h1>
                    <p>
                        Here is a list of my prospective projects.
                    </p>
                </div>
                <div class="row">
                    {projects.map((project) => (
                        <a class="main_div card d-flex" href={project.link} key={project.title}>
                            <img class="" src={project.image} alt="" />
                            <div class='sub_div d-flex align-self text-center flex-column'>
                                <h4>
                                    {project.title}
                                </h4>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;