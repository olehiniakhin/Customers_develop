import React, { Component } from 'react'
import {Grid, Container, Image, Icon, Menu, Label, Button} from 'semantic-ui-react'
import mark from '../../assets/images/mark.png'

class L44 extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='middle' columns={2} centered>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Image src={mark} size='small' wrapped />
          </Grid.Row>
          <Grid.Row>
            <Button secondary circular>Choisir ma surprise</Button>
          </Grid.Row>
          <Grid.Row centered>
            Image
          </Grid.Row>
          <Grid.Row width={15}>
            <Menu style={{'position':'fixed','bottom':'2em'}} icon='labeled'>
              <Menu.Item style={{'minWidth':'2em', 'padding': '1em 0.8em'}} name='qrcode' link>
                <Icon name='qrcode' />
                Carte ID
                <Label floating circular color='red'>
                1
                </Label>
              </Menu.Item>
              <Menu.Item style={{'minWidth':'2em', 'padding': '1em 0.8em'}} name='wallet' link >
                <Icon name='folder open' />
                Wallet
              </Menu.Item>
              <Menu.Item style={{'minWidth':'2em', 'padding': '1em 0.8em'}} name='tag' link>
                <Icon name='tag' flipped='vertically' rotated='clockwise' />
                Offres
              </Menu.Item>
              <Menu.Item style={{'minWidth':'2em', 'padding': '1em 0.8em'}} name='setting' link >
                <Icon name='setting' />
                Paramètres
              </Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default L44
