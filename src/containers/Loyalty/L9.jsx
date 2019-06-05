import React, { Component } from 'react'
import {Grid, Container, Header, Button, Image, Icon, Card} from 'semantic-ui-react'
import mark from '../../assets/images/mark.png'
import BarCode from '../../components/VoucherPage/BarCode'
import { L9Div } from './styles'

class L9 extends Component {
  render () {
    const voucher = {
      'id': '0lK6jnlOJC'
    }
    return (
      <Container>
        <L9Div>
          <Grid verticalAlign='middle' centered style={{height: '100%'}} >
            <Grid.Row verticalAlign='bottom' style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '0.3em', 'marginTop': '8px'}}>
              <Grid.Column floated='right' width={11}>
                <Header as='h3' textAlign='center'>Carte ID</Header>
              </Grid.Column>
              <Grid.Column verticalAlign='bottom' floated={'right'} width={1}>
                <Button icon floated='right' size='big' style={{'backgroundColor': '#f1ddc9', 'paddingBottom': '3px'}}>
                  <Icon name='close' color='black' />
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Header as='h3' textAlign='center'>Votre carte Café Kitsuné</Header>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column width={15}>
                <Header as='h6' textAlign='center'>Présentez-lá au commerçant pour valider cos points de fidélités à chaque achat.</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                <Card style={{padding: '0px 50px'}}>
                  <Image src={mark} />
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{
              'backgroundColor': '#000',
              'position': 'fixed',
              'bottom': 0,
              'top': '55%'
            }}>
              <BarCode
                format='QR'
                token='7EtpkwyQ'
                expireAt= '2019-06-22T08:02:30.682Z'
                withExpiration='false'
                prefix='XXX'
                withPrefix='false'
                status='pending'
                displayModal='true'
                voucher={voucher}
              />
            </Grid.Row>
          </Grid>
        </L9Div>
      </Container>
    )
  }
}

export default L9
