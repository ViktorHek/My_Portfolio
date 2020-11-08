import React, { Component } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";
import ProjectCard from './ProjectCard'
import "./index.css"

class Projects extends Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        axios.get("./data/projects.json").then((response) => {
            this.setState({ projects: response.data });
        });
    }

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
            <h1 id="projects-header">What?</h1>
            <Grid>{projectsList}</Grid>                    
          </Container>
        );
    }

}

export default Projects;