import React, { Component } from 'react'
import {Grid, Image, Header, Button, Icon, Label} from 'semantic-ui-react'
import mark from '../../assets/images/mark.png'
import { Border } from './styles'

class L2 extends Component {
  render () {
    return (
      <Border>
        <Grid verticalAlign='middle' centered style={{'borderRadius': '30px', 'backgroundColor': '#fff', 'height': '100%', 'margin': '0'}}>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Image src={mark} size='small' wrapped />
          </Grid.Row>
          <Grid.Row>
            <Header as='h2' textAlign='center'>Et hop, déja un tampon <br /> ajoutée à votre carte!</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Icon.Group>
              <Icon name='paw' size='huge' color='black' />
              <Label color='black' floating circular>
                1/5
              </Label>
            </Icon.Group>
          </Grid.Row>
          <Grid.Row>
            <Button nature='primary' circular size='big' style={{fontSize: '13px', 'backgroundColor': 'transparent','color': '#000','boxShadow': '0 0 0 2px #000'}}><span>Découvrir la carte</span></Button>     
          </Grid.Row>
        </Grid>
        <Grid centered>
          <Grid.Row>
            <Header as='h4' color='grey'>
            Per <a> HelloVoucher </a>
            </Header>
          </Grid.Row>
        </Grid>
      </Border>
    )
  }
}

export default L2
