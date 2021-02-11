import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Content>
        <h2>{project.name}</h2>
        <Card.Description>{project.description}</Card.Description>
        <Button icon href={project.link}>
          Client
        </Button>
        {project.link2 && (
          <Button icon href={project.link2}>
            API
          </Button>
        )}
      </Card.Content>
      <Card.Content extra>
        <h5>{project.language}</h5>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
