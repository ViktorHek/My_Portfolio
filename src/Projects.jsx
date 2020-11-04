import React, { Component } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";
import ProjectCard from './ProjectCard'

class Projects extends Component {
    state = {
        projects: [
           /* {
                id: 1,
                name: "My First Website",
            },
            {
                id: 2,
                name: "Fizzbuzz",
            }, */
        ],
    };

    render() {
        const { projects } = this.state;
        let projectsList = projects.map((project) => {
            return (
                <div id={`project-${project.id}`} key={project.id}>
                    <ProjectCard project={project} />
                </div>
            );
        });

        return (
          <Container>
            <h1 id="projects-header">My Projects</h1>
            <Grid>{projectsList}</Grid>                    
          </Container>
        );
    }
    
    componentDidMount() {
        axios.get("./data/projects.json").then((response) => {
            this.setState({ projects: response.data });
        });
    }
}

export default Projects;