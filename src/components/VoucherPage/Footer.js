import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import RightArrowIcon from 'react-icons/lib/io/ios-arrow-thin-right'
import {Grid, Message} from 'semantic-ui-react'
import { Button } from '../../styles/Buttons'
import CustomIntl from "../../utils/CustomIntl"

const submitButtonStyles = (color) => {
  return {
    'backgroundColor': color,
    'color': 'white',
  }
}

const submitButtonStylesInverted = (color) => {
  return {
    'backgroundColor': 'transparent',
    'color': color,
    'boxShadow': '0 0 0 2px ' + color 
  }
}

const getButton = ({color, shapeBtn, onStoresBtnClick, voucher}) => {
  
  switch (shapeBtn) {
    case "rounded":
      return  <Button nature='primary' onClick={onStoresBtnClick} size='big' fluid  style={{...submitButtonStyles(color), fontSize: '13px'}}><RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     

    case "square":
      return <Button nature='primary'  onClick={onStoresBtnClick}  size='big' fluid style={{borderRadius: "0em", ...submitButtonStyles(color), fontSize: '13px'}} primary><RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     
    
    case "circle":
      return  <Button  nature='primary' onClick={onStoresBtnClick}  size='big' fluid style={{borderRadius: "3em", ...submitButtonStyles(color), fontSize: '13px'}} primary><RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     
    
    case "roundedInverted":
      return <Button nature='primary'   onClick={onStoresBtnClick} size='big' fluid style={{...submitButtonStylesInverted(color), fontSize: '13px'}}><RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     

    case "squareInverted":
      return <Button nature='primary'   onClick={onStoresBtnClick}  size='big' fluid style={{...submitButtonStylesInverted(color), borderRadius: "0em", fontSize: '13px' }} primary><span>{ CustomIntl(voucher,"callText") }</span>   </Button>

    case "circleInverted":
      return <Button  nature='primary' onClick={onStoresBtnClick}  size='big' fluid style={{...submitButtonStylesInverted(color), borderRadius: "3em", fontSize: '13px' }} primary> <span>{ CustomIntl(voucher,"callText") }</span>   </Button>

    default:
      return  <Button nature='primary'  onClick={onStoresBtnClick}  size='big' fluid style={{...submitButtonStyles(color), fontSize: '13px'}}><RightArrowIcon className='store-btn-icon' />       <span>{ CustomIntl(voucher,"callText") }</span>     </Button>     
  }
}


const Footer = ({ onStoresBtnClick ,intl: { formatMessage }, voucher }) => {
  const styles = voucher.get('templateRef').get('styles');
  return (
  <Grid.Row>
    {getButton({color:styles.buttons.color, shapeBtn:styles.buttons.shape, onStoresBtnClick:onStoresBtnClick, voucher:voucher})}
    <Message style={{width: '100%', textAlign: 'center'}}>
      <Message.Header>By <a target="_blank" rel="noopener noreferrer" href="https://universal-voucher.eu/">Universal Voucher</a></Message.Header>
    </Message>
  </Grid.Row>
  )}

Footer.propTypes = {
  intl: PropTypes.object.isRequired,
  onStoresBtnClick: PropTypes.func.isRequired
}

export default injectIntl(Footer)
