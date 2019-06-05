import React, { Component } from 'react'
import {Grid, Container, Image, Header, Icon, Menu, Label} from 'semantic-ui-react'
import mark from '../../assets/images/mark.png'
import plain1 from '../../assets/images/plain1.svg'
import './styles/L4.css'

class L4 extends Component {
  render () {
    return (
      <Container>
        <Grid verticalAlign='middle' columns={2} centered>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Image src={mark} size='small' wrapped />
          </Grid.Row>
          <Grid.Row>
            <Header as='h2' textAlign='center'>Plus que 4 tampons avant <br /> votre surprise!</Header>
          </Grid.Row>
          <Grid.Row centered style={{position: 'relative', 'paddingBottom': '115px'}}>
            <Image src={plain1} style={{height: '240px'}} />
            <div style={{position: 'absolute', top: '220px', left:'-15px', right: '205px'}}>
              <Icon.Group>
                <Icon name='paw' size='big' color='black' circular inverted style={{fontSize: '25px'}} />
                <Label color='black' floating circular style={{fontSize: '10px', zIndex: '0'}}>
                  1/5
                </Label>
              </Icon.Group>
            </div>
            <div style={{position: 'absolute', top: '165px', left:'250px', right: '15px'}}>
              <Icon.Group>
                <Icon name='paw' size='big' color='black' circular inverted color='grey' style={{fontSize: '25px'}} />
                <Label color='grey' floating circular style={{fontSize: '10px', zIndex: '0'}}>
                  2/5
                </Label>
              </Icon.Group>
            </div>
            <div style={{position: 'absolute', top: '105px', left:'85px', right: '80px'}}>
              <Icon.Group>
                <Icon name='paw' size='big' color='black' circular inverted color='grey' style={{fontSize: '25px'}} />
                <Label color='grey' floating circular style={{fontSize: '10px', zIndex: '0'}}>
                  3/5
                </Label>
              </Icon.Group>
            </div>
            <div style={{position: 'absolute', top: '50px', left:'-15px', right: '205px'}}>
              <Icon.Group>
                <Icon name='paw' size='big' color='black' circular inverted color='grey' style={{fontSize: '25px'}} />
                <Label color='grey' floating circular style={{fontSize: '10px', zIndex: '0'}}>
                  4/5
                </Label>
              </Icon.Group>
            </div>
            <div style={{position: 'absolute', top: '-10px', left:'250px', right: '15px'}}>
              <Icon.Group>
                <Icon name='paw' size='big' color='black' circular inverted color='grey' style={{fontSize: '25px'}} />
                <Label color='grey' floating circular style={{fontSize: '10px', zIndex: '0'}}>
                  5/5
                </Label>
              </Icon.Group>
            </div>
          </Grid.Row>
          <Grid.Row width={15}>
            <Menu icon='labeled' className='bottom-menu'>
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

export default L4
