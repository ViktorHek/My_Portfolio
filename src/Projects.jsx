import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";

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
                    <h3>{project.name}</h3>
                </div>
            );
        });

        return (
          <Container>
            <h1 id="projects-header">My Projects</h1>
            {projectsList}
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