import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Content>
        <h2>{project.name}</h2>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h5>{project.language}</h5>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
