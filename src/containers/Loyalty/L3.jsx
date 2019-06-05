import React, { Component } from 'react'
import {Grid, Image, Header} from 'semantic-ui-react'
import BarCodeLoyalty from '../../components/VoucherPage/BarCodeLoyalty'
import mark from '../../assets/images/mark.png'
import { Border } from './styles'

class L3 extends Component {
  render () {
    const voucher = {
      'id': '0lK6jnlOJC'
    }
    return (
      <Border>
        <Grid verticalAlign='middle' centered style={{'borderRadius': '30px', 'backgroundColor': '#fff', 'margin': '0', 'height': '100%'}}>
          <Grid.Row centered>
            <Image src={mark} size='small' wrapped />
          </Grid.Row>
          <Grid.Row centered>
            <Header as='h2' textAlign='center'>Carte de fildélite</Header>
          </Grid.Row>
          <Grid.Row centered>
            <div style={{'padding': '0px, 10px, 0px, 10px'}}>
              <BarCodeLoyalty
                token='7EtpkwyQ'
              />
            </div>
          </Grid.Row>
            <div style={{'marginTop': '0px'}}>ID:ihidfhfhd</div>
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

export default L3
