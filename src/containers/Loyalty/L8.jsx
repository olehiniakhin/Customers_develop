import React, { Component } from 'react'
import {Grid, Container, Header, Button, Image} from 'semantic-ui-react'
import { L9Div } from './styles'

class L8 extends Component {
  render () {
    return (
      <Container>
        <L9Div>
          <Grid verticalAlign='middle' centered style={{height: '100%', marginTop: 0, marginBottom: 0}}>
            <Grid.Row></Grid.Row>
            <Grid.Row>
              <Header as='h3' textAlign='center'>Votre aventure a été mise <br /> à jour avec succès!</Header>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as='h3' textAlign='center'>A bientôt pour de nouvelles gourmandises @ Café Kitsuné :)</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <Button circular fluid color='black'>Aller sur ma carte</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <Button circular fluid basic color='black'>Revenir aux choix précédents</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </L9Div>
      </Container>
    )
  }
}

export default L8
