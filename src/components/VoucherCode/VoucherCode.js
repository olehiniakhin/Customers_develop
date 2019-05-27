import React from 'react'
import PropTypes from 'prop-types'
import ReactBarcode from 'react-barcode'
import {QRCode} from 'react-qr-svg'
import VoucherInfo from './VoucherInfo'
import { SliderWrapper } from '../VoucherPage/styles'
import TransactionSlider from './Slider'

const VoucherCode = ({format, token, prefix, withPrefix, status, mode, displayModal, voucher}) => {
  if (format === 'BAR') {
    return <ReactBarcode
      format={'CODE128'}
      value={token}
      displayValue={false}
      height={120}
      width={1.8}
      quite={10}/>
  }
  if (format === 'QR'){
    return <QRCode
      bgColor='#FFFFFF'
      fgColor='#000000'
      level='L'
      style={{ width: 150, marginBottom: '10px' }}
      value={token}
    />
  }
  if(format === 'TEXT') {
      const prefixValue = withPrefix ? prefix+'-' : '';
      return (
        <VoucherInfo 
          value =  {prefixValue+token}
        />
      );
    }
  if(format === 'SLIDER') {
      return (
        <SliderWrapper color={voucher.get('templateRef').get('styles').pastille.color || "#4cd784"}>
          <TransactionSlider token={ token } status={ status } mode={mode} displayModal={displayModal} voucher={voucher}/>
        </SliderWrapper>
      );
    }
}


VoucherCode.propTypes = {
  format: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
}

export default VoucherCode