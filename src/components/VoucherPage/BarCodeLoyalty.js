import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import Moment from 'moment'
import {QRCode} from 'react-qr-svg'
import { BarCodeWrapper } from './styles'
import fr from 'moment/locale/fr'  // eslint-disable-line
import es from 'moment/locale/es'  // eslint-disable-line
import en from 'moment/locale/en-gb'  // eslint-disable-line


const BarCodeLoyalty = ({ token }) => (
  <Grid.Row>
    <Grid.Column width={16}>
      <BarCodeWrapper>
      <QRCode
          bgColor='#FFFFFF'
          fgColor='#000000'
          level='L'
          style={{ width: 150, marginBottom: '10px' }}
          value={token}
        />
      </BarCodeWrapper>
    </Grid.Column>
  </Grid.Row>
)

BarCodeLoyalty.propTypes = {
  token: PropTypes.string.isRequired
}

export default BarCodeLoyalty