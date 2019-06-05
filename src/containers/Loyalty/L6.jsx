import React, { Component } from 'react'
import {Grid, Container, Header, Button, Icon, Form, Radio, Item, Image} from 'semantic-ui-react'

class L6 extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='middle' centered>
          <Grid.Row verticalAlign='bottom' style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '0.3em', 'marginTop':'8px'}}>
            <Grid.Column floated='right' width={11}>
              <Header as='h3' textAlign='center'>Parcours de fidélite</Header>
            </Grid.Column>
            <Grid.Column verticalAlign='bottom' floated={'right'} width={1}>
              <Button icon floated='right' size='big'  style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '3px'}}>
                <Icon name='close' color='black' />
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as='h3' textAlign='center'>Choisisses dès maintenant <br /> vos récompenses</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={15}>
              <Header as='h3' textAlign='center'>Récompense au 5ème achht</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' wrapped circular />
            </Grid.Column>
            <Grid.Column width={8}>
              <Item>
                <Item.Content verticalAlign='middle'>
                  <Form>
                    <Form.Field>
                      <Radio
                        label='Cake pavot-citon'
                        name='radioGroup'
                        value='this'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label='Marbré chocolat-vanille'
                        name='radioGroup'
                        value='this'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label='Bon de réduction de 5€'
                        name='radioGroup'
                        value='that'
                      />
                    </Form.Field>
                  </Form>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button circular color='black'>
              Choisir
            </Button>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default L6
