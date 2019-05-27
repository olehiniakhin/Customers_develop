import React, { Component } from 'react'
import {Grid, Container, Header, Button, Input, Icon, Tab, Form, Popup} from 'semantic-ui-react'

const panes = [
  { menuItem: {content:'Informations', style:{borderBottomWidth:'5px'}} ,render: () =>
    <Tab.Pane>
      <Informations />
    </Tab.Pane>
  },
  { menuItem: {content:'Notifications',style:{borderBottomWidth:'5px'}}, render: () => 
    <Grid style={{'padding': '1rem'}} centered >
      Todo
    </Grid> 
  }
]

class Informations extends Component {
  render ()  {
    return (
      <Form>
        <div>
          <Header as='h4' style={{marginBottom: '5px'}}>Date de naissance</Header>
          <Form.Group inline>
            <Form.Field style={{width: '25%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
            <Form.Field style={{width: '25%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
            <Form.Field style={{width: '50%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
          </Form.Group>
          <Header as='h5' disabled style={{marginTop: '10px', marginBottom: '10px'}}>
            <Icon name='info' />
            <Header.Content>
              <Header.Subheader>Entrez votre date de naissance pour recevoir un cadeau d'anniversaire
  Prènom</Header.Subheader>
            </Header.Content>
          </Header>
        </div>
        <div>
          <Header as='h4' style={{marginBottom: '5px'}}>Prènom</Header>
          <Form.Group>
            <Form.Field style={{width: '100%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
          </Form.Group>
          <Header as='h5' disabled style={{marginTop: '10px', marginBottom: '10px'}}>
            <Icon name='info' />
            <Header.Content>
              <Header.Subheader>On aime bien mettre un nom sur un visage, mais c'est comme vous voulez :)</Header.Subheader>
            </Header.Content>
          </Header>
        </div>
        <div>
          <Header as='h4' style={{marginBottom: '5px'}}>Email</Header>
          <Form.Group>
            <Form.Field style={{width: '100%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
          </Form.Group>
          <Popup
            trigger={
              <Header as='h5' disabled style={{marginTop: '10px', marginBottom: '10px'}} dividing>
                <Icon name='info' />
                <Header.Content>
                  <Header.Subheader>Pourguoi nous donner votre email?</Header.Subheader>
                </Header.Content>
              </Header>
            }
            content={
              <p>Il nous servira principalement à sècuriser votre carte en cas de perte de votre tèlèphone</p>
            }
            on='click'
            position='bottom left'
          />   
        </div>
        <div>
          <Header as='h4' style={{marginBottom: '5px'}}>Date de naissance</Header>
          <Form.Group>
            <Form.Field style={{width: '100%'}}>
              <Input style={{width: '100%'}} />
            </Form.Field>
          </Form.Group>
          <Header as='h5' disabled style={{marginTop: '10px', marginBottom: '10px'}}>
            <Icon name='info' />
            <Header.Content>
              <Header.Subheader>Entrez votre numèro pour recevoir vos notifications par SMS</Header.Subheader>
            </Header.Content>
          </Header>
        </div>
        <div>
          <Grid style={{margin: 0}} centered>
            <Grid.Row>
              <Button inverted color='red' style={{textAlign: 'center'}}>
                Enregistrer
              </Button>
            </Grid.Row>
            <Grid.Row>
              <Button basic color='black' style={{width: '100%', marginBottom: '5px'}}><Icon name='google' /> Sign in with Google</Button>
              <Button color='facebook' style={{width: '100%', marginBottom: '5px'}}><Icon name='facebook f' /> Sign in with Facebook</Button>
            </Grid.Row>
            <Grid.Row>
              <Header as='h5' disabled style={{marginTop: '10px', marginBottom: '10px'}} dividing>
                <Header.Content>
                  <Header.Subheader>Supprimer mon compte</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Row>
          </Grid>
        </div>
      </Form>
    )
  }
}

class L10 extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='middle' centered>
          <Grid.Row style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '0.3em'}}>
            <Grid.Column floated='right' width={11}>
              <Header as='h3' textAlign='center'>Paramètres</Header>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' floated={'right'} width={1}>
              <Button icon floated='right' size='big'  style={{'backgroundColor': '#f1ddc9'}}>
                <Icon name='close' color='black' />
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={15}>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default L10
