import React, { Component } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import ProjectCard from "../ProjectCard";
import "../../index.css";

class What extends Component {
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
      <div className="whatContainer">
        <div className="whatText">
          <h1 id="projects-header">What I have done</h1>
          <Grid>{projectsList}</Grid>
        </div>
      </div>
    );
  }
}

export default What;
