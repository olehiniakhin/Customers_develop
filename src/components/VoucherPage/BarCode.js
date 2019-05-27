import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import Moment from 'moment'
import VoucherCode from '../VoucherCode'
import { FormattedMessage } from 'react-intl'
import { BarCodeWrapper } from './styles'
import fr from 'moment/locale/fr'  // eslint-disable-line
import es from 'moment/locale/es'  // eslint-disable-line
import en from 'moment/locale/en-gb'  // eslint-disable-line


const BarCode = ({ token, format, expireAt, withExpiration, withPrefix, prefix, status, mode, displayModal, voucher}) => (
  <Grid.Row>
    <Grid.Column width={16}>
      <BarCodeWrapper>
      { <VoucherCode format={format} token={token} prefix={prefix} withPrefix={withPrefix} status={status} mode={mode} displayModal={displayModal} voucher={voucher}/> }
        <p className='text-smoke voucher-expiry'>
        {withExpiration && 
          <FormattedMessage
            id='voucher.expiredDate'
            defaultMessage={'This e-voucher will expire { expiry }.'}
            values={{
              expiry: Moment(expireAt).format('LL')
            }}
          />}
        </p>
      </BarCodeWrapper>
    </Grid.Column>
  </Grid.Row>
)

BarCode.propTypes = {
  token: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  expireAt: PropTypes.string.isRequired
}

export default BarCode
