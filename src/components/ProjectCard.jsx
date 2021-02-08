import React from 'react'
import { Card } from 'semantic-ui-react'
// import { Card, Button, Icon } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Content>
        <h2>{project.name}</h2>
        <Card.Description>{project.description}</Card.Description>
        {/* <Button icon href={project.link}>
          <Icon name="external alternate" />
        </Button> */}
      </Card.Content>
      <Card.Content extra>
        <a>{project.language}</a>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
