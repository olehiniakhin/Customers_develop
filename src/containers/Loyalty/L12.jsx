import React, { Component } from 'react'
import { Grid, Container, Image, Header, Button, Icon, Tab } from 'semantic-ui-react'
import mark from '../../assets/images/mark.png'

const panes = [
  { menuItem: 'Rècompenses', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Offres du Jour', render: () => <Grid style={{'padding': '1rem'}} centered >A ce jour vous n'avez pas encore de<br />coupons Offres du Jour à utiliser</Grid> }
]

class L12 extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='bottom' textAlign='center' columns={3} style={{'paddingBottom': '0em'}}>
          <Grid.Row style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '0.3rem'}} verticalAlign='bottom' >
            <Grid.Column floated='right'>
              <Header as='h3'>Wallet</Header>
            </Grid.Column>
            <Grid.Column verticalAlign='bottom' floated={'right'} width={1}>
              <Button icon floated='right' size='big'  style={{'backgroundColor': '#f1ddc9'}}>
                <Icon name='close' color='black' />
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h3'>Vous avez 1 carte de fidèlitè</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Image src={mark} size='small' wrapped />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button color='black' basic circular>Sèlectionner</Button>
          </Grid.Row>
          <Grid.Row>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Grid.Row>

        </Grid>
      </Container>
    )
  }
}

export default L12
