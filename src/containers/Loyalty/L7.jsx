import React, { Component } from 'react'
import Whirligig from 'react-whirligig'
import { Grid, Container, Image, Header, Button, Icon, Tab, Accordion, Card, List } from 'semantic-ui-react'
import './styles/L7.css'

const panes = [
  { menuItem: 'Rècompenses', render: () =>
    <AccordionExampleStandard />
  },
  { menuItem: 'Offres du Jour', render: () => 
    <Grid style={{'padding': '1rem'}} centered >
      A ce jour vous n'avez pas encore de<br />coupons Offres du Jour à utiliser
    </Grid> 
  }
]

class AccordionExampleStandard extends Component {
  render() { 
    const panels = [
      {
        key: 'panel-1',
        title: 'Rècompenses gagnèes',
        content: {
          content: (
            <div>
              <Card style={{width: '100%'}}>
                <Card.Content>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name='github' size='huge' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>10 € DE REDUCTION</List.Header>
                        <List.Description as='a'>Paur un minimum d'achat de 10 € Valable jusqu'au 14/05/20</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item style={{textAlign: 'center'}}>
                      <Button circular  inverted color='red'>Utiliser</Button>
                      <Button circular  inverted color='red'>Offrir</Button>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
              <Card style={{width: '100%'}}>
                <Card.Content>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name='github' size='huge' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>LATTE BY KITUSNE</List.Header>
                        <List.Description as='a'>D'une valeur de 5.00 € Valable jusqu'au 21/04/20</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item style={{textAlign: 'center'}}>
                      <Button circular  inverted color='red'>Utiliser</Button>
                      <Button circular  inverted color='red'>Offrir</Button>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
            </div>
          )
        }
      },
      {
        key: 'panel-2',
        title: 'Rècompenses utilisèes',
        content: {
          content: (
            <div>
              <Card style={{width: '100%'}}>
                <Card.Content>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name='github' size='huge' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>SABLE KITSUNE</List.Header>
                        <List.Description as='a'>D'une valeur de 3.50 € Utilièe le 02/05/19</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
              <Card style={{width: '100%'}}>
                <Card.Content>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name='github' size='huge' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>MARBRE<br />CHOCOLAT-VANILLE</List.Header>
                        <List.Description as='a'>D'une valeur de 3.50 € Utilièe le 02/05/19</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
            </div>
          )
        }
      }
    ]

    return (
      <Accordion panels={panels} exclusive={false} />
    )
  }
}

class L7 extends Component {
  render () {
    
    let whirligig
    return (
      <Container>
        <Grid verticalAlign='middle' textAlign='center'>
          <Grid.Row verticalAlign='bottom' style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '0.3em', 'marginTop': '8px'}}>
            <Grid.Column floated='right' width={11}>
              <Header as='h3' textAlign='center'>Carte ID</Header>
            </Grid.Column>
            <Grid.Column verticalAlign='bottom' floated={'right'} width={1}>
              <Button icon floated='right' size='big'  style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '3px'}}>
                <Icon name='close' color='black' />
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h3'>Vous avez 1 carte de fidèlitè</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <Card>
                <div>
                  <Whirligig
                    visibleSlides={1}
                    gutter="1em"
                    ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                  >
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size='small' />
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size='small' />
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size='small' />
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size='small' />
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size='small' />
                  </Whirligig>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button color='black' basic circular>Sèlectionner</Button>
          </Grid.Row>
        </Grid>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} style={{display: 'content'}} />
      </Container>
    )
  }
}

export default L7
