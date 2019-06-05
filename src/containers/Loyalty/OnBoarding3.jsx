import React, { Component } from 'react'
import {Grid, Container, Image, Header, Button} from 'semantic-ui-react'
import roundedLine from '../../assets/images/roundedline.svg'
import dot from '../../assets/images/dot.svg'

const onboarding1 = 'https://url.upwork.com/_01yQ8y97FSYYVnkDQJNlPWY5xE0BxXDe2V'

class OnBoarding extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='middle' columns={2} centered>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Image src={onboarding1} size='medium' centered />
          </Grid.Row>
          <Grid.Row>
            <Header as='h2' textAlign='center'>Votre fidélité <br /> récompensée</Header>
          </Grid.Row>
          <Grid.Row>
            <Header as='h4' textAlign='center' disabled>dans vos magasins préférés</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group>
              <Image src={dot} />
              <Image src={dot}/>
              <Image src={roundedLine} style={{marginLeft: '-7px'}}/>
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Button color='orange' circular>Passer</Button>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3' floated='left' hidden>
                Précédent
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' floated='right'>
                Suivant
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default OnBoarding
