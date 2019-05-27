import React, { Component } from 'react'
import {Grid, Container, Header, Button, Label, Segment} from 'semantic-ui-react'

class L5 extends Component {
  render () {
    const square = { width: 150, height: 150 }
    return (
      <Container>
        <Grid verticalAlign='middle' columns={2} centered>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <div>
              <Segment circular inverted style={{width:45, height: 60, padding: 10}}>
                <Header as='h4' inverted>
                  10/10
                </Header>
              </Segment>
            </div>
          </Grid.Row>
          <Grid.Row>
            <Header as='h2' textAlign='center'>Récompense <br /> débloquée</Header>
          </Grid.Row>
          <Grid.Row centered>
            <div>
              <Segment circular inverted style={square}>
                <Header as='h2' inverted>
                  10€
                  <Header.Subheader>de réduction</Header.Subheader>
                </Header>
                <Label size='small' color='black' floating circular style={{left: -15, top: -5, width: 60, height: 60}}>
                  <p style={{paddingTop: 15}}>Offert</p>
                </Label>
              </Segment>
            </div>
          </Grid.Row>
          <Grid.Row style={{padding: '5px'}}>
            <Header as='h4'>
              SUR UN MININUM DE 10 D'ACHAT
              <Header.Subheader style={{paddingTop: '5px'}}>Valable jusqu'au 14/05/20</Header.Subheader>
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Button nature='primary' circular size='big' style={{fontSize: '13px', 'backgroundColor': 'transparent','color': '#000','boxShadow': '0 0 0 2px #000', 'marginRight': '5px'}}><span>Utiliser</span></Button>     
            <Button nature='primary' circular size='big' style={{fontSize: '13px', 'backgroundColor': 'transparent','color': '#000','boxShadow': '0 0 0 2px #000', 'marginLeft': '5px'}}><span>Ajouter dans le Wallet</span></Button>     
          </Grid.Row>
          <Grid.Row style={{padding: '5px'}}>
            <Header as='h4'>
              {'> Je préfère l\'offrir! <'}
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Button nature='primary' circular size='big' style={{fontSize: '13px', 'backgroundColor': 'transparent','color': '#000','boxShadow': '0 0 0 2px #000'}}><span>Faites-en un cadeau</span></Button>     
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default L5
